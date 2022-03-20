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
      className="w-20 py-1 rounded-2xl border font-light text-[10px] uppercase text-center lg:font-normal lg:text-xs lg:w-24"
      style={{ background, borderColor: border, color }}
    >
      {name}
    </span>
  );
};
