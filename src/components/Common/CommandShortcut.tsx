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
      return <button onClick={query.toggle}>Tap to look around →</button>;
    } else if (isMac) {
      return (
        <button onClick={query.toggle}>
          Press{" "}
          <kbd className="px-1.5 py-1 font-sans font-medium text-sm bg-tertiary rounded text-primary">
            ⌘
          </kbd>{" "}
          <kbd className="ml-1 px-1.5 py-1 font-sans font-medium text-sm bg-tertiary rounded text-primary">
            K
          </kbd>{" "}
          to look around →
        </button>
      );
    } else {
      return (
        <button onClick={query.toggle}>
          Press{" "}
          <kbd className="px-1.5 py-1 font-sans font-medium text-sm bg-tertiary rounded text-primary">
            Ctrl
          </kbd>
          <kbd className="px-1.5 mx-1 py-1 font-sans font-medium text-sm bg-tertiary rounded text-primary">
            K
          </kbd>
          to look around →
        </button>
      );
    }
  }

  return <div />;
};

export default CommandShortcut;
