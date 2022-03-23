import CloseIcon from "@svg/close.svg";

type TProps = {
  hideSidebar: () => void;
};

const Sidebar = ({ hideSidebar }: TProps) => {
  return (
    <div className="w-3/4 h-screen bg-zinc-900 z-10 absolute border-l overflow-hidden border-zinc-700 animate-slideOut sm:w-1/2">
      <section className="py-3 px-4 flex justify-end">
        <button
          className="p-2 bg-zinc-800 rounded-md flex hover:bg-zinc-700"
          onClick={hideSidebar}
        >
          <CloseIcon />
        </button>
      </section>
    </div>
  );
};

export default Sidebar;
