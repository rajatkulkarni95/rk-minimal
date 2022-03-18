import { prisma } from "../../lib/prisma";
import { extendType, nonNull, objectType, stringArg } from "nexus";

export const Tag = objectType({
  name: "Tag",
  definition(t) {
    t.id("uuid");
    t.string("name");
    t.string("background");
    t.string("border");
    t.string("color");
  },
});

// Fetch All tags
export const TagsQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("tags", {
      type: "Tag",
      resolve: (_parent, _args, context, info) => {
        return prisma.tag.findMany();
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
      async resolve(_parent, args, context) {
        const newTag = {
          name: args.name,
          background: args.background,
          border: args.border,
          color: args.color,
        };

        return await context.prisma.tag.create({
          data: newTag,
        });
      },
    });
  },
});
