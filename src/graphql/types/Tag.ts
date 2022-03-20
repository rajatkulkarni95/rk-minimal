import { extendType, nonNull, objectType, stringArg } from "nexus";

export const Tag = objectType({
  name: "Tag",
  definition(t) {
    t.nonNull.string("uuid");
    t.nonNull.string("name", { description: "Tag Name" });
    t.nonNull.string("background");
    t.nonNull.string("border");
    t.nonNull.string("color", { description: "Text color" });
    t.list.field("bookmarks", {
      type: "Bookmark",
      resolve: (_parent, args, ctx) => {
        return ctx.prisma.bookmark.findMany({
          where: {
            tagUuid: {
              equals: _parent.uuid,
            },
          },
        });
      },
    });
  },
});

// Fetch All tags
export const TagsQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("tags", {
      type: "Tag",
      resolve: (_parent, _args, ctx) => {
        return ctx.prisma.tag.findMany();
      },
    });

    t.field("tag", {
      type: "Tag",
      args: {
        id: nonNull(stringArg()),
      },
      resolve: (parent, args, ctx) => {
        return ctx.prisma.tag.findUnique({
          where: {
            uuid: args.id,
          },
        });
      },
    });
  },
});

// Create a Tag
export const CreateTagMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createTag", {
      type: Tag,
      args: {
        name: nonNull(stringArg()),
        background: nonNull(stringArg()),
        border: nonNull(stringArg()),
        color: nonNull(stringArg()),
      },
      async resolve(_parent, args, ctx) {
        const newTag = {
          name: args.name,
          background: args.background,
          border: args.border,
          color: args.color,
        };

        return await ctx.prisma.tag.create({
          data: newTag,
        });
      },
    });
  },
});
