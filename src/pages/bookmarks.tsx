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
    <main className="w-full h-full px-4 pb-4 mx-auto md:w-3/4 md:mt-0 md:pb-10 lg:pb-16 lg:w-[720px] lg:h-[720px] xl:my-auto">
      <h3 className="text-lg uppercase text-gray-100 lg:text-2xl">Bookmarks</h3>
      <p className="mt-1 text-xs font-light text-gray-400 lg:text-base">
        Things found on the interwebs that needed to be saved
      </p>

      <section className="flex justify-between my-6 lg:my-12">
        <p className="text-xs font-medium text-gray-400 lg:text-base">
          {data?.bookmarks?.length} bookmarks
        </p>
      </section>
      <section className="flex flex-col mt-8">
        {data?.bookmarks.map((bookmark) => (
          <BookmarkItem
            key={bookmark.uuid}
            title={bookmark.title}
            url={bookmark.url}
            tag={bookmark.tag}
          />
        ))}
      </section>
    </main>
  );
};

export default Bookmarks;
