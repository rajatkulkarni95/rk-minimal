import { useQuery } from "@apollo/client";
import { BookmarkItem } from "@components/Bookmarks/Item";
import { Main } from "@components/Common/Main";
import { NexusGenFieldTypes } from "generated/nexus-typegen.gen";
import { NextPage } from "next";
import { Fragment } from "react";
import { GET_ALL_BOOKMARKS } from "src/graphql/queries/bookmarks";
import { TPageProps } from "src/types";

interface GetBookmarks {
  bookmarks: NexusGenFieldTypes["Bookmark"][];
}

const Bookmarks: NextPage<TPageProps> = ({ isSidebarOpen }: TPageProps) => {
  const { data, loading } = useQuery<GetBookmarks>(GET_ALL_BOOKMARKS);

  return (
    <Main isSidebarOpen={isSidebarOpen}>
      <h3 className="text-lg uppercase text-gray-100 lg:text-2xl">Bookmarks</h3>
      <p className="mt-1 text-xs font-light text-gray-400 lg:text-base">
        Things found on the interwebs that needed to be saved
      </p>

      {loading ? (
        <p className="text-xs font-light text-gray-400 m-4">Loading...</p>
      ) : (
        <Fragment>
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
        </Fragment>
      )}
    </Main>
  );
};

export default Bookmarks;
