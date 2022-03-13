import Location from "@components/Location";
import { links } from "@data/links";
import useWindowSize from "src/hooks/useWindowSize";
import { Size } from "src/types";

const Footer = () => {
  const windowSize: Size = useWindowSize();
  const isMobile = (windowSize?.width ?? 641) < 640;
  return (
    <footer className="h-12 bg-zinc-900 shadow-md flex items-baseline py-2 px-6 sticky justify-center md:justify-between bottom-0 opacity-0 animate-fadeIn mt-auto [animation-delay:3000ms]">
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
      {!isMobile && <Location />}
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
