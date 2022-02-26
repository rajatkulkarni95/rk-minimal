import { links } from "../../data/links";

const Footer = () => {
  return (
    <footer className="h-12 bg-zinc-800 flex items-center py-2 px-6 sticky justify-between bottom-0 opacity-0 animate-fadeIn [animation-delay:2000ms]">
      {links.map((link) => (
        <a
          href={link.url}
          key={link.id}
          target="_blank"
          rel="noreferrer"
          className="text-xs text-zinc-200 border-dashed border-b border-zinc-500"
        >
          {link.name}
        </a>
      ))}
    </footer>
  );
};

export default Footer;
