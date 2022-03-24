import CloseIcon from "@svg/close.svg";
import { useRef } from "react";
import useOnClickOutside from "src/hooks/useOnClickOutside";
import { InternalLink } from "./LinkButton";

type TProps = {
  hideSidebar: () => void;
  showSidebar: boolean;
};

const Sidebar = ({ hideSidebar, showSidebar }: TProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(sidebarRef, hideSidebar);

  return (
    <aside
      ref={sidebarRef}
      className={`w-[280px] z-30 fixed right-0 top-0 flex h-full bg-zinc-900 flex-none transform flex-col overflow-y-auto border-l border-zinc-700 transition duration-200 ease-in-out  ${
        showSidebar ? "translate-x-0 " : "translate-x-full"
      }`}
    >
      <section className="p-4 flex justify-end">
        <button
          className="p-2 bg-zinc-800 rounded-md flex hover:bg-zinc-700"
          onClick={hideSidebar}
        >
          <CloseIcon />
        </button>
      </section>

      <section className="mt-8 px-4 w-full">
        <InternalLink href="/" text="Home" onClick={hideSidebar} />
        <InternalLink
          href="/bookmarks"
          text="Bookmarks"
          onClick={hideSidebar}
        />
      </section>
    </aside>
  );
};

export default Sidebar;
