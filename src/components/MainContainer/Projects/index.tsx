import { projects } from "@data/projects";
import Tag from "@components/Common/Tag";
import GithubIcon from "@svg/github.svg";
import TooltipProvider from "@components/Common/Tooltip";

const Projects = () => {
  return (
    <section className="flex flex-col mt-6 md:flex-row md:items-baseline opacity-0 animate-fadeIn [animation-delay:2000ms]">
      <span className="text-[11px] text-amber-300 uppercase md:text-right">
        Projects
      </span>
      <section className="flex-col w-full md:ml-3">
        {projects.map((project) => (
          <section className="flex items-baseline" key={project.id}>
            <span className="text-xs text-gray-500 font-light mr-2 py-1 border-b border-b-gray-600">
              {project.id}
            </span>
            <div key={project.id} className="flex flex-col my-2 w-full">
              <div className="flex justify-between items-center">
                <p className="flex items-baseline">
                  <a
                    href={project.site}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm border-b border-transparent pt-1 pb-[3px] hover:border-b-gray-600"
                  >
                    {project.title}{" "}
                  </a>
                  {project.wip && (
                    <span className="bg-yellow-500 bg-opacity-25 text-yellow-300 py-[2px] px-2 rounded ml-3 text-[11px]">
                      WIP
                    </span>
                  )}
                </p>
                <TooltipProvider tooltip="View Code">
                  <a href={project.code} target="_blank" rel="noreferrer">
                    <GithubIcon height={16} width={16} />
                  </a>
                </TooltipProvider>
              </div>
              <p className="text-[13px] mt-1 text-gray-400">
                {project.description}
              </p>
              <section className="flex items-center mt-2">
                {project.meta.map((tech) => (
                  <Tag text={tech} key={tech} />
                ))}
              </section>
            </div>
          </section>
        ))}
      </section>
    </section>
  );
};

export default Projects;
