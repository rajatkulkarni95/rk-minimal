import { projects } from "@data/projects";

const Projects = () => {
  return (
    <section>
      <h2 className="text-xs text-zinc-600 dark:text-zinc-400 mb-3">Projects</h2>
      <div className="space-y-2">
        {projects.map((project) => (
          <p key={project.id} className="text-sm text-zinc-600 dark:text-zinc-400">
            <a
              href={project.site}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-900 dark:text-white hover:underline underline-offset-2"
            >
              {project.title}
            </a>
            {" — "}
            {project.description}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Projects;
