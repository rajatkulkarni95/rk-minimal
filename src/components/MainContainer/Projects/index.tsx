import { projects } from "@data/projects";
import GithubIcon from "@svg/github.svg";
import TooltipProvider from "@components/Common/Tooltip";
import TextTag from "@components/Common/TextTag";

const Projects = () => {
  return (
    <section className="flex flex-col mt-6 md:flex-row md:items-baseline opacity-0 animate-fadeIn [animation-delay:2000ms]">
      <span className="text-[11px] text-amber-300 uppercase md:text-right">
        Projects
      </span>
      <section className="flex-col w-full mt-2 md:ml-3">
        {projects.map((project) => (
          <section
            className="flex items-baseline flex-col md:flex-row"
            key={project.id}
          >
            <div key={project.id} className="flex flex-col mb-4 w-full">
              <div className="flex justify-between items-center">
                <p className="flex items-baseline">
                  <a
                    href={project.site}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm border-b-2 border-b-gray-600 pt-1 pb-[3px] hover:text-yellow-500"
                  >
                    {project.title}{" "}
                  </a>
                  {project.wip && (
                    <span className="bg-yellow-500 bg-opacity-25 text-yellow-300 py-[2px] px-2 rounded ml-3 text-[11px]">
                      WIP
                    </span>
                  )}
                </p>
                {project.code !== "" && (
                  <TooltipProvider tooltip="View Code">
                    <a href={project.code} target="_blank" rel="noreferrer">
                      <GithubIcon height={16} width={16} />
                    </a>
                  </TooltipProvider>
                )}
              </div>
              <p className="text-[13px] mt-1 text-gray-400">
                {project.description}
              </p>
              <section className="flex items-center mt-2">
                {project.meta.map((tech) => (
                  <TextTag text={tech} key={tech} />
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
