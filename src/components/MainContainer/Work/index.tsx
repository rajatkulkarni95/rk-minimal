import { work } from "@data/work";

const Work = () => {
  const currentJob = work[0];
  const previousJobs = work.slice(1);

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-xs text-zinc-600 dark:text-zinc-400 mb-3">
          Currently
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {currentJob.designation} at{" "}
          <a
            href="https://octarine.app"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-900 dark:text-white hover:underline underline-offset-2"
          >
            {currentJob.company}
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-xs text-zinc-600 dark:text-zinc-400 mb-3">
          Previous
        </h2>
        <div className="space-y-2">
          {previousJobs.map((exp) => (
            <p
              key={exp.id}
              className="text-sm text-zinc-600 dark:text-zinc-400 flex justify-between"
            >
              <span>
                {exp.designation} at{" "}
                <span className="text-zinc-900 dark:text-white">
                  {exp.company}
                </span>
              </span>
              <span className="hidden sm:inline">{exp.time}</span>
            </p>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Work;
