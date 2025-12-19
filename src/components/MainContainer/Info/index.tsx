import { useState } from "react";
import Image from "next/image";

const Info = () => {
  const [showCats, setShowCats] = useState(false);

  return (
    <section className="space-y-4">
      <p className="text-base text-zinc-900 dark:text-white leading-relaxed">
        I'm a frontend engineer turned do-whatever-needed engineer working on
        Octarine, where I juggle my time between design, code, marketing and
        customer support to help our users get the most out of their writing
        tools.
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
          className="relative inline-block"
          onMouseEnter={() => setShowCats(true)}
          onMouseLeave={() => setShowCats(false)}
        >
          <span className="bg-zinc-200 dark:bg-zinc-800 px-1.5 py-0.5 rounded cursor-pointer">
            Stella and Mylo
          </span>
          {showCats && (
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 z-10 w-80">
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
