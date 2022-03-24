import { NexusGenFieldTypes } from "generated/nexus-typegen.gen";
import { BookmarkTag } from "./Tag";

interface IBookmarkItem {
  title: string;
  url: string;
  tag: NexusGenFieldTypes["Bookmark"]["tag"];
}

export const BookmarkItem = ({ title, url, tag }: IBookmarkItem) => {
  return (
    <div className="flex-col mb-4">
      <div className="flex justify-between">
        <a
          className="inline-block max-w-[220px] flex flex-col lg:max-w-md"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          <p className="text-sm text-gray-50 font-normal hover:text-green-500 lg:text-base">
            {title}
          </p>
          <p className="text-xs text-gray-400 font-light hover:underline lg:text-sm">
            {url}
          </p>
        </a>
        <BookmarkTag
          background={tag?.background}
          border={tag?.border}
          color={tag?.color}
          name={tag?.name}
        />
      </div>
    </div>
  );
};
