import { ReactNode } from "react";

type TMainProps = {
  children: ReactNode;
  isSidebarOpen?: boolean;
};

export const Main = ({ children, isSidebarOpen }: TMainProps) => {
  return (
    <main
      className={`w-full h-full px-4 pb-4 mx-auto sm:w-11/12 md:w-3/4 md:mt-4 md:pb-10 ${
        isSidebarOpen && "opacity-60"
      }`}
    >
      <div className="mx-auto md:overflow-y-auto lg:pb-16 lg:w-[720px]">
        {children}
      </div>
    </main>
  );
};
