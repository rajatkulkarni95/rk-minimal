import { makeSchema } from "nexus";
import { join } from "path";
import * as QueryTypes from "./types";

export const schema = makeSchema({
  types: [QueryTypes],
  outputs: {
    schema: join(process.cwd(), "generated/schema.gen.graphql"),
    typegen: join(process.cwd(), "generated/nexus-typegen.gen.ts"),
  },
  contextType: {
    export: "Context",
    module: join(process.cwd(), "src/graphql", "context.ts"),
  },
});
