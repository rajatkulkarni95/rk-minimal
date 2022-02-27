import { projects } from "../../../data/projects";
import Tag from "../../Common/Tag";
import GithubIcon from "../../../svg/github.svg";

const Projects = () => {
  return (
    <section className="flex flex-col mt-6 md:flex-row md:items-baseline opacity-0 animate-fadeIn [animation-delay:3500ms]">
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
                <a
                  href={project.site}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm"
                >
                  {project.title}
                </a>
                <a href={project.code} target="_blank" rel="noreferrer">
                  <GithubIcon height={16} width={16} className="mr-3" />
                </a>
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
