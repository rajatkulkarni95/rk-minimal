import { useQuery } from "@apollo/client";
import { BookmarkItem } from "@components/Common/BookmarkItem";
import { NexusGenFieldTypes } from "generated/nexus-typegen.gen";
import { NextPage } from "next";
import { GET_ALL_BOOKMARKS } from "src/graphql/queries/bookmarks";

interface GetBookmarks {
  bookmarks: NexusGenFieldTypes["Bookmark"][];
}

const Bookmarks: NextPage = () => {
  const { data, loading } = useQuery<GetBookmarks>(GET_ALL_BOOKMARKS);
  if (loading)
    return <p className="text-xs font-light text-gray-400 m-4">Loading...</p>;

  return (
    <div className="m-4 flex flex-col md:mx-12">
      <h3 className="text-lg uppercase text-gray-100">Bookmarks</h3>
      <p className="mt-1 text-xs font-light text-gray-400">
        Things found on the interwebs that needed to be saved
      </p>

      <section className="flex justify-between my-5">
        <p className="text-xs font-medium text-white">
          {data?.bookmarks?.length} bookmarks
        </p>
      </section>
      <section className="flex flex-col lg:flex-row">
        {data?.bookmarks.map((bookmark) => (
          <BookmarkItem
            title={bookmark.title}
            url={bookmark.url}
            tag={bookmark.tag}
          />
        ))}
      </section>
    </div>
  );
};

export default Bookmarks;
