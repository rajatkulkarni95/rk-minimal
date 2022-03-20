import { NexusGenFieldTypes } from "generated/nexus-typegen.gen";
import { BookmarkTag } from "./BookmarkTag";

interface IBookmarkItem {
  title: string;
  url: string;
  tag: NexusGenFieldTypes["Bookmark"]["tag"];
}

export const BookmarkItem = ({ title, url, tag }: IBookmarkItem) => {
  return (
    <div className="flex justify-between mb-4">
      <div className="flex flex-col">
        <a
          className="text-sm text-gray-50 font-normal"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          {title}
        </a>
        <a
          className="text-xs text-gray-300 font-light"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          {url}
        </a>
      </div>
      <BookmarkTag
        background={tag?.background}
        border={tag?.border}
        color={tag?.color}
        name={tag?.name}
      />
    </div>
  );
};
