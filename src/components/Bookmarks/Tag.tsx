import { NexusGenObjects } from "generated/nexus-typegen.gen";

export interface IBookmarkTag {
  background?: string;
  border?: string;
  color?: string;
  name?: string;
}

export const BookmarkTag = ({
  background,
  border,
  color,
  name,
}: IBookmarkTag) => {
  return (
    <span
      className="w-20 h-5 flex items-center justify-center py-1 rounded-2xl border font-normal text-[11px] uppercase text-center lg:text-xs lg:w-24 lg:h-6"
      style={{ background, borderColor: border, color }}
    >
      {name}
    </span>
  );
};
