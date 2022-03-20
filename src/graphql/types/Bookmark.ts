import { extendType, nonNull, objectType, stringArg } from "nexus";

export const Bookmark = objectType({
  name: "Bookmark",
  definition(t) {
    t.nonNull.string("uuid");
    t.nonNull.string("title");
    t.nonNull.string("url");
    t.string("image");
    t.string("description");
    t.string("faviconUrl");
    t.string("tagUuid");
    t.field("tag", {
      type: "Tag",
      resolve: (_parent, args, ctx) => {
        return ctx.prisma.tag.findUnique({
          where: {
            uuid: _parent.tagUuid!,
          },
        });
      },
    });
  },
});

// Fetch All Bookmarks
export const BookmarkQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("bookmarks", {
      type: "Bookmark",
      resolve: (_, __, ctx) => {
        return ctx.prisma.bookmark.findMany();
      },
    });

    t.field("bookmark", {
      type: "Bookmark",
      args: {
        id: nonNull(stringArg()),
      },
      resolve: (_parent, args, ctx) => {
        return ctx.prisma.bookmark.findUnique({
          where: {
            uuid: args.id,
          },
        });
      },
    });
  },
});

// Create a Bookmark
export const CreateBookmarkMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createBookmark", {
      type: Bookmark,
      args: {
        title: nonNull(stringArg()),
        url: nonNull(stringArg()),
        description: stringArg(),
        tagUuid: nonNull(stringArg()),
      },
      async resolve(_, args, ctx) {
        const newBookmark = {
          title: args.title,
          url: args.url,
          description: args.description,
          tagUuid: args.tagUuid,
        };

        return await ctx.prisma.bookmark.create({
          data: newBookmark,
        });
      },
    });
  },
});
