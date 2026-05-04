import { ReactNode } from "react";

type TMainProps = {
  children: ReactNode;
  isSidebarOpen?: boolean;
};

export const Main = ({ children, isSidebarOpen }: TMainProps) => {
  return (
    <main
      className={`flex-1 flex items-center justify-center px-6 py-12 md:py-24 ${
        isSidebarOpen ? "opacity-60" : ""
      }`}
    >
      <div className="w-full max-w-xl">
        {children}
      </div>
    </main>
  );
};
