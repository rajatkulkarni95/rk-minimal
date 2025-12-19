import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const Info = () => {
  const [showCats, setShowCats] = useState(false);
  const [showAbove, setShowAbove] = useState(true);
  const triggerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (showCats && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const imageHeight = 320; // w-80 = 320px, assume roughly square
      const spaceAbove = rect.top;
      const spaceBelow = window.innerHeight - rect.bottom;

      // Show below if not enough space above, otherwise show above
      setShowAbove(spaceAbove >= imageHeight + 16);
    }
  }, [showCats]);

  return (
    <section className="space-y-4">
      <p className="text-base text-zinc-900 dark:text-white leading-relaxed">
        I’m a frontend engineer turned “do-whatever’s-needed” engineer at
        Octarine, juggling design, code, marketing, and customer support to help
        writers get the most out of their tools.
      </p>
      <p className="text-base text-zinc-900 dark:text-white leading-relaxed">
        From India, my career has spanned diverse companies, from setting up
        back-office automations and writing Python scripts for large-scale data
        extraction, to leading the UI team for an effective AI startup.
      </p>
      <p className="text-base text-zinc-900 dark:text-white leading-relaxed">
        When not responding to users or fixing a bug, you can see me playing
        with my 2 adorable cats —{" "}
        <span
          ref={triggerRef}
          className="relative inline-block"
          onMouseEnter={() => setShowCats(true)}
          onMouseLeave={() => setShowCats(false)}
        >
          <span className="bg-zinc-200 dark:bg-zinc-800 px-1.5 py-0.5 rounded cursor-pointer">
            Stella and Mylo
          </span>
          {showCats && (
            <span
              className={`absolute left-1/2 -translate-x-1/2 z-10 w-80 ${
                showAbove ? "bottom-full mb-2" : "top-full mt-2"
              }`}
            >
              <Image
                src="/cats.png"
                alt="Stella and Mylo"
                width={480}
                height={480}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </span>
          )}
        </span>
        .
      </p>
    </section>
  );
};

export default Info;
