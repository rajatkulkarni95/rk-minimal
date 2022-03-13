import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
};

export const Container = (props: TContainerProps) => (
  <div className="w-full h-full px-4 pb-4 mx-auto md:w-3/4 md:mt-0 md:pb-10 lg:pb-16 lg:w-[720px] lg:h-[600px] xl:my-auto">
    {props.children}
  </div>
);
