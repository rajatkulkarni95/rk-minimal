import React from "react";
import * as RadixHoverCard from "@radix-ui/react-hover-card";
import { twMerge } from "tailwind-merge";

type TProps = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  contentClasses?: string;
  openDelay?: number;
  closeDelay?: number;
  open?: boolean;
};

const HoverCard = ({
  trigger,
  children,
  side = "right",
  contentClasses,
  openDelay = 100,
  closeDelay = 100,
  open,
}: TProps) => (
  <RadixHoverCard.Root
    openDelay={openDelay}
    closeDelay={closeDelay}
    open={open}
  >
    <RadixHoverCard.Trigger asChild>{trigger}</RadixHoverCard.Trigger>
    <RadixHoverCard.Portal>
      <RadixHoverCard.Content
        className={twMerge(
          "w-[300px] rounded border border-primary bg-secondary p-3 shadow-sm data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade data-[state=open]:transition-all",
          contentClasses
        )}
        sideOffset={16}
        align="start"
        side={side}
      >
        {children}
      </RadixHoverCard.Content>
    </RadixHoverCard.Portal>
  </RadixHoverCard.Root>
);

export default HoverCard;
