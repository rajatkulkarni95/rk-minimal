import { projects } from "../../../data/projects";

const Projects = () => {
  return (
    <section className="flex flex-col mt-6">
      <span className="text-xs text-amber-300 mr-4 uppercase">Projects</span>
      {projects.map((project) => (
        <div key={project.id} className="flex flex-col my-2">
          <h3 className="text-sm">{project.title}</h3>
          <p className="text-xs mt-1 text-gray-400">{project.description}</p>
          <section className="flex items-center mt-2">
            {project.meta.map((tech) => (
              <span
                key={tech}
                className="text-[10px] py-1 px-3 rounded mr-2 border border-gray-600"
              >
                {tech}
              </span>
            ))}
          </section>
        </div>
      ))}
    </section>
  );
};

export default Projects;
