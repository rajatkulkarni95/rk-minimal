# Making Octarine load large notes faster

A deep dive into progressive rendering, viewport-aware syntax highlighting, and why traditional virtualization doesn't work for rich text editors.

---

## The Problem

Octarine started choking on large documents. Users with extensive meeting notes, research documents, or code-heavy files were experiencing:

- **2-3 second delays** when opening large notes
- **Scroll jank** that made the editor feel unresponsive
- **Typing lag** when editing documents with multiple code blocks
- **UI freezes** during syntax highlighting updates

The obvious solution? "Just add virtualization like VS Code or CodeMirror does."

Except... that doesn't work here. Here's why.

---

## The Tauri + WebKit Challenge

Octarine is built with [Tauri](https://tauri.app/), which means on macOS, the app runs on Safari's WebKit engine rather than Chromium. This matters *a lot* for performance.

WebKit's JavaScript engine (JavaScriptCore) is generally slower than V8 for heavy DOM manipulation. Layout recalculations are more expensive. And some APIs that Chromium has optimized to death—like `requestIdleCallback`—aren't even available in Safari (requiring polyfills).

What might be "fast enough" in an Electron app becomes noticeably sluggish in Tauri on macOS. Every millisecond counts, and optimizations that seem premature in Chromium become essential in WebKit.

This constraint forced me to be ruthlessly efficient with every DOM operation, every re-render, and every syntax highlighting pass.

---

## Why Traditional Virtualization Fails for Rich Text Editors

Code editors like Monaco (VS Code) and CodeMirror use **line-based virtualization**. They only render visible lines and maintain a virtual scroll container that pretends the full document exists. This works brilliantly for code because:

1. **Lines are atomic units** - A line of code is a self-contained element
2. **Uniform height** - Each line (mostly) has the same height
3. **No cross-line formatting** - Bold text doesn't span multiple lines
4. **Predictable structure** - It's just text with syntax highlighting

Rich text editors (like Octarine's, built on TipTap/ProseMirror) are fundamentally different:

1. **Block-level elements vary wildly** - A paragraph might be 2 lines, a code block 50 lines, an embedded image 300px tall
2. **Nested structures** - Lists within lists, blockquotes containing code blocks
3. **Cross-block selections** - Users select across multiple paragraphs
4. **Complex formatting** - Tables, math equations, collapsible headings
5. **Undo/redo integrity** - History must track the entire document state

Virtualizing this would require:

- Accurate height prediction for unrendered content (impossible without rendering)
- Handling selection across virtual boundaries
- Managing focus, cursor position, and keyboard navigation across unmounted nodes
- Preserving undo history for content that doesn't exist in the DOM

I tried. I failed. The complexity was astronomical and the edge cases were endless.

---

## The Solution: Progressive Rendering + Viewport-Aware Processing

Instead of fighting the DOM, I work *with* it. The approach has three pillars:

### 1. Progressive Content Loading

The insight: **Users only see the top of the document initially.** Why render 50,000 characters when they can only see 2,000?

```typescript
// Threshold for progressive loading
const PROGRESSIVE_THRESHOLD = 2000; // characters
const INITIAL_CHUNK_SIZE = 1500; // characters

function findBreakPoint(content: string, targetLength: number): number {
  // Look for natural break points near the target
  const searchRegion = content.slice(targetLength - 200, targetLength + 200);

  // Priority 1: Paragraph break (double newline)
  const paragraphBreak = searchRegion.lastIndexOf("\n\n");
  if (paragraphBreak !== -1) return targetLength - 200 + paragraphBreak + 2;

  // Priority 2: Single newline
  const lineBreak = searchRegion.lastIndexOf("\n");
  if (lineBreak !== -1) return targetLength - 200 + lineBreak + 1;

  // Fallback: sentence end or exact position
  return targetLength;
}
```

The flow:

1. **Immediate render**: Show the first \~1,500 characters instantly
2. **Schedule completion**: Use `requestIdleCallback` to load the rest when the browser is idle
3. **Seamless append**: Merge the full content without disrupting the user

```typescript
const loadFullContent = () => {
  setState({
    content: fullContent,
    isLoading: false,
    isComplete: true,
  });
};

// Wait for initial paint, then load during idle time
requestAnimationFrame(() => {
  if ("requestIdleCallback" in window) {
    requestIdleCallback(loadFullContent, { timeout: 100 });
  } else {
    // Fallback for Safari/WebKit
    setTimeout(loadFullContent, 16); // ~1 frame
  }
});
```

**Result**: A 50KB document that took 2.3 seconds to open now shows content in **\~80ms**.

---

### 2. Viewport-Aware Syntax Highlighting

Code blocks are expensive. Prism.js tokenization on a 500-line code block takes \~50ms. With 10 code blocks, that's half a second of blocking work—and WebKit handles this even worse than Chromium.

The solution: **Only highlight code blocks visible on screen.**

```typescript
// Track which code blocks are in the viewport
const viewportCodeBlocks = new Set<number>();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const pos = parseInt(entry.target.dataset.pos, 10);

      if (entry.isIntersecting) {
        viewportCodeBlocks.add(pos);
      } else {
        viewportCodeBlocks.delete(pos);
      }
    });

    // Trigger re-highlight only for newly visible blocks
    if (changed) {
      scheduleHighlightUpdate();
    }
  },
  {
    // Pre-fetch: start highlighting 200px before blocks enter viewport
    rootMargin: "200px 0px 200px 0px",
    threshold: 0.1,
  }
);
```

When processing code blocks, I skip those outside the viewport entirely:

```typescript
tr.doc.descendants((node, pos) => {
  if (node.type.name !== "codeBlock") return;

  // Skip code blocks outside viewport - treat as plaintext
  const isInViewport = viewportCodeBlocks.has(pos);
  if (!isInViewport) return;

  // Only now do we run expensive tokenization
  const tokens = Prism.tokenize(code, Prism.languages[language]);
  // ... apply decorations
});
```

**Result**: Opening a document with 20 code blocks now only tokenizes 2-3 visible ones. Scroll performance improved from **janky** to **smooth 60fps**.

---

### 3. Debounced + Incremental Updates

Scrolling fires intersection events rapidly. Typing triggers document changes constantly. Without debouncing, the editor would be re-highlighting on every frame.

```typescript
// Debounce viewport changes - wait for scroll to settle
let viewportUpdateTimeout: ReturnType<typeof setTimeout> | null = null;

if (changed) {
  if (viewportUpdateTimeout) clearTimeout(viewportUpdateTimeout);
  viewportUpdateTimeout = setTimeout(() => {
    triggerHighlightUpdate();
  }, 150); // Wait 150ms after scroll stops
}
```

For typing, I track *which* code blocks changed and only re-tokenize those:

```typescript
// Track changed ranges from the transaction
const changedRanges: { from: number; to: number }[] = [];
tr.mapping.maps.forEach((stepMap) => {
  stepMap.forEach((oldStart, oldEnd, newStart, newEnd) => {
    changedRanges.push({ from: newStart, to: newEnd });
  });
});

// Skip code blocks that weren't modified
const isInChangedRange = (pos: number, nodeSize: number): boolean => {
  if (forceUpdate) return true;
  return changedRanges.some(
    (range) => !(pos + nodeSize < range.from || pos > range.to)
  );
};
```

**Result**: Typing in one code block no longer re-tokenizes all 15 code blocks in the document.

---

### 4. Content Hash Caching

Every time React re-renders, the editor hook runs. Previously, I'd call `editor.storage.markdown.getMarkdown()` to compare content—but serializing 50KB of content just to check "did anything change?" is wasteful.

New approach: **cheap hash comparison first**.

```typescript
// Create a simple hash: length + first 100 chars + last 100 chars
const contentHash =
  existingValue.length +
  ":" +
  existingValue.slice(0, 100) +
  existingValue.slice(-100);

const fileChanged = lastLoadedFileIdRef.current !== id;
const contentChanged = lastLoadedContentHashRef.current !== contentHash;

// Only reset content if file changed OR external content changed
if (fileChanged || contentChanged) {
  resetEditorContent(editor, existingValue);
  lastLoadedContentHashRef.current = contentHash;
}
```

This catches 99% of "nothing changed" cases without serializing the document.

---

### 5. CSS Transition Optimization

A subtle but impactful fix. I had transitions on all paragraph elements for a "focus mode" feature:

```css
/* Before: Applied to ALL elements, ALL the time */
.ProseMirror p,
.ProseMirror h1,
.ProseMirror h2 {
  transition: opacity 0.2s ease-in-out;
}
```

The problem? During scroll, the browser was calculating potential transitions for every element, even though they weren't animating. This caused **composite layer thrashing**—and WebKit is particularly sensitive to this.

```css
/* After: Only apply when focus mode is active */
[data-focus-mode="true"] .ProseMirror p,
[data-focus-mode="true"] .ProseMirror h1,
[data-focus-mode="true"] .ProseMirror h2 {
  transition: opacity 0.2s ease-in-out;
}
```

**Result**: Scroll performance improved measurably, especially on lower-powered devices.

---

## Measuring the Impact

I added performance tracking to measure real-world impact:

| Metric | Before | After | Improvement |
| --- | --- | --- | --- |
| Time to first content (50KB doc) | 2,300ms | 80ms | **28x faster** |
| Full document load | 2,300ms | 450ms | **5x faster** |
| Scroll FPS (10 code blocks) | 24fps | 60fps | **Smooth** |
| Typing latency (mid-document) | 180ms | 12ms | **15x faster** |
| Memory churn during scroll | High | Minimal | **Stable** |

---

## Key Takeaways

1. **Virtualization isn't always the answer.** For rich text, work with the DOM, not against it.
2. **Know your runtime.** WebKit performs differently than Chromium—optimizations that seem unnecessary in Electron become critical in Tauri.
3. **Progressive loading beats lazy loading.** Show *something* instantly, then enhance.
4. **Viewport awareness is powerful.** The browser's Intersection Observer API is underutilized.
5. **Debounce aggressively.** Users can't perceive 150ms delays, but your CPU can feel every unnecessary update.
6. **Profile before optimizing.** The CSS transition fix was found through Safari's Web Inspector, not intuition.
7. **Cheap checks before expensive operations.** A 200-byte hash comparison beats a 50KB serialization every time.

---
