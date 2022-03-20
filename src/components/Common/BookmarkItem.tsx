import { NexusGenFieldTypes } from "generated/nexus-typegen.gen";
import { BookmarkTag } from "./BookmarkTag";

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
          className="text-sm text-gray-50 font-normal"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          {title}
        </a>
        <BookmarkTag
          background={tag?.background}
          border={tag?.border}
          color={tag?.color}
          name={tag?.name}
        />
      </div>
      <a
        className="text-xs text-gray-300 font-light inline-block w-64"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        {url}
      </a>
    </div>
  );
};
