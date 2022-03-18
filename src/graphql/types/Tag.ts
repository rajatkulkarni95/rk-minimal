import { prisma } from "../../lib/prisma";
import { extendType, objectType, queryType } from "nexus";

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
