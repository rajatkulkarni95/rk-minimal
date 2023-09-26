import { useState, useEffect } from "react";
import { useKBar } from "kbar";

const CommandShortcut = () => {
  const { query } = useKBar();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    const isMac = /(Mac)/i.test(navigator.userAgent);
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);

    if (isMobile) {
      return (
        <button onClick={query.toggle} className="text-sm lg:text-base">
          Tap to look around →
        </button>
      );
    }
    return (
      <button
        onClick={query.toggle}
        className="text-sm gap-0.5 px-1.5 py-1 -ml-1.5 rounded hover:bg-secondary lg:text-base"
      >
        Press{" "}
        <kbd className="px-1.5 py-1 font-sans font-medium text-xs bg-tertiary rounded text-primary">
          {isMac ? "⌘" : "Ctrl"}
        </kbd>{" "}
        <kbd className=" px-1.5 py-1 font-sans font-medium text-xs bg-tertiary rounded text-primary">
          K
        </kbd>{" "}
        to look around →
      </button>
    );
  }

  return <div />;
};

export default CommandShortcut;
