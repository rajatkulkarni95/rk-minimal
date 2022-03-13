import React, { Fragment } from "react";
import { work } from "@data/work";

const Work = () => {
  return (
    <section className="flex flex-col mt-6 md:flex-row md:items-baseline opacity-0 [animation-delay:2500ms] animate-fadeIn">
      <span className="text-[11px] text-pink-300 uppercase md:w-12 md:text-right">
        Work
      </span>
      <section className="grid grid-cols-[160px_60px_100px] gap-x-4 gap-y-4 mt-2 md:ml-4 md:grid-cols-[225px_100px_150px]">
        {work.map((exp) => (
          <Fragment key={exp.id}>
            <span className="text-xs text-gray-300 md:text-[13px]">
              {exp.designation}
            </span>
            <span className="text-xs text-white md:text-[13px]">
              {exp.company}
            </span>
            <span className="text-[11px] text-gray-300 md:text-xs">
              {exp.time}
            </span>
          </Fragment>
        ))}
      </section>
    </section>
  );
};

export default Work;
