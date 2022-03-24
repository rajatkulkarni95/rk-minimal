import CloseIcon from "@svg/close.svg";
import { useRef } from "react";
import useOnClickOutside from "src/hooks/useOnClickOutside";

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
      className={`${
        showSidebar
          ? "absolute inset-y-0 right-0 translate-x-0 shadow-lg"
          : "absolute right-0 translate-x-full"
      } w-[280px] z-30 flex h-full bg-zinc-900 flex-none transform flex-col overflow-y-auto border-l border-zinc-700 transition duration-200 ease-in-out`}
    >
      <section className="p-4 flex justify-end">
        <button
          className="p-2 bg-zinc-800 rounded-md flex hover:bg-zinc-700"
          onClick={hideSidebar}
        >
          <CloseIcon />
        </button>
      </section>
    </aside>
  );
};

export default Sidebar;
