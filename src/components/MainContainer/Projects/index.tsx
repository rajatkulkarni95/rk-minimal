import { projects } from "../../../data/projects";
import {
  PrimaryLinkButton,
  SecondaryLinkButton,
} from "../../Common/LinkButton";
import Tag from "../../Common/Tag";

const Projects = () => {
  return (
    <section className="flex flex-col mt-6">
      <span className="text-[11px] text-amber-300 mr-4 uppercase">
        Projects
      </span>
      {projects.map((project) => (
        <div key={project.id} className="flex flex-col my-2">
          <div className="flex justify-between items-center">
            <h3 className="text-sm">{project.title}</h3>
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
      ))}
    </section>
  );
};

export default Projects;
