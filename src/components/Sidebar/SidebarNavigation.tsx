import { InternalLink } from "@components/Common/LinkButton";
import { links } from "@data/links";

type TProps = {
  hideSidebar: () => void;
};

const SidebarNavigation = ({ hideSidebar }: TProps) => {
  return (
    <div className="flex flex-col h-2/3">
      <section className="mt-4 px-4 w-full">
        <p className="text-xs text-gray-100 mb-2">Site</p>
        <InternalLink href="/" text="Home" onClick={hideSidebar} />
        <InternalLink
          href="/bookmarks"
          text="Bookmarks"
          onClick={hideSidebar}
        />
      </section>
      <section className="mt-auto px-4 w-full flex flex-col">
        <p className="text-xs text-gray-100 mb-2">On the web</p>
        {links.slice(1).map((link) => (
          <a
            href={link.url}
            key={link.id}
            target="_blank"
            rel="noreferrer"
            className="py-2 px-4 rounded-md text-sm text-left cursor-pointer bg-zinc-800 text-zinc-50 hover:bg-zinc-700 w-full mb-3"
          >
            {link.name}
          </a>
        ))}
      </section>
    </div>
  );
};

export default SidebarNavigation;
