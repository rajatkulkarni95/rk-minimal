import React, { ReactNode } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

type TContentProps = {
  children: ReactNode;
};

const TooltipContent = ({ children }: TContentProps) => (
  <TooltipPrimitive.Content className="rounded py-1 px-3 leading-4 text-[11px] font-light text-zinc-100 bg-zinc-800 animate-slideDownAndFade will-change-transform">
    {children}
  </TooltipPrimitive.Content>
);

const StyledArrow = () => <TooltipPrimitive.Arrow className="fill-zinc-800" />;

// Exports
export const Provider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;

type Props = {
  children: React.ReactNode;
  tooltip: string;
  //   side?: "left" | "right" | "bottom" | "top";
};

const TooltipProvider = ({ children, tooltip }: Props) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent>
        {tooltip}
        <StyledArrow />
      </TooltipContent>
    </Tooltip>
  );
};

export default TooltipProvider;
