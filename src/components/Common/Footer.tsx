import { links } from "../../data/links";

const Footer = () => {
  return (
    <footer className="h-12 bg-zinc-900 shadow-md flex items-center py-2 px-6 sticky justify-center md:justify-between bottom-0 opacity-0 animate-fadeIn mt-auto [animation-delay:2500ms] md:[animation-delay:2000ms]">
      <aside>
        <a
          href={links[0].url}
          target="_blank"
          rel="noreferrer"
          className="text-xs text-zinc-400 hover:text-zinc-50 mr-6 md:ml-6"
        >
          {links[0].name}
        </a>{" "}
      </aside>
      <div>
        {links.slice(1).map((link) => (
          <a
            href={link.url}
            key={link.id}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-zinc-400 mr-6 last:mr-0 md:mr-8 md:last:mr-8 hover:text-zinc-50"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
