import { getApolloClient } from "@lib/apollo";
import { NextPage } from "next";
import { GET_TAGS } from "src/graphql/queries/tags";

type TProps = {
  tags: {
    background: string;
    uuid: string;
    color: string;
    name: string;
    border: string;
  };
};

const Bookmarks: NextPage<TProps> = ({ tags }: TProps) => {
  return <h1 className="m-16">Bookmarks</h1>;
};

export async function getStaticProps() {
  const apolloClient = getApolloClient({});
  const { data } = await apolloClient.query({
    query: GET_TAGS,
  });

  return {
    props: {
      tags: data.tags,
    },
  };
}

export default Bookmarks;
