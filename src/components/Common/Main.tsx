import { ReactNode } from "react";

type TMainProps = {
  children: ReactNode;
  isSidebarOpen?: boolean;
};

export const Main = ({ children, isSidebarOpen }: TMainProps) => {
  return (
    <main
      className={`w-full h-full px-4 pb-4 mx-auto sm:w-11/12 md:w-3/4 md:mt-0 md:pb-10 lg:pb-16 lg:w-[720px] lg:h-[720px] xl:my-auto ${
        isSidebarOpen && "opacity-60"
      }`}
    >
      {children}
    </main>
  );
};
