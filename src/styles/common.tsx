import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: TContainerProps) => (
  <div className="mx-auto h-full w-full px-4 pb-4 md:mt-0 md:w-3/4 md:pb-10 lg:h-[600px] lg:w-[720px] lg:pb-16 xl:my-auto">
    {children}
  </div>
);
