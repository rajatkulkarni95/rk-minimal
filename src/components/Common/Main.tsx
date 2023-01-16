import { ReactNode } from "react";

type TMainProps = {
  children: ReactNode;
};

export const Main = ({ children }: TMainProps) => {
  return (
    <main className="w-full h-screen px-4 pb-4 overflow-y-hidden mx-auto md:w-3/4 lg:w-[900px]">
      {children}
    </main>
  );
};
