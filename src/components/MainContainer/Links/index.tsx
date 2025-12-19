import { links } from "@data/links";

const Links = () => {
  return (
    <section>
      <h2 className="text-xs text-zinc-500 dark:text-zinc-400 mb-3">Find me</h2>
      <div className="space-y-2">
        {links.map((link) => (
          <p key={link.id} className="text-sm text-zinc-500 dark:text-zinc-400">
            {link.label}{" "}
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-900 dark:text-white hover:underline underline-offset-2"
            >
              {link.name}
            </a>
          </p>
        ))}
      </div>
    </section>
  );
};

export default Links;
