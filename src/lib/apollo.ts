import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { useMemo } from "react";
import { NextApiRequest, NextApiResponse } from "next";

export interface GraphQlContext {
  req: NextApiRequest;
  res: NextApiResponse;
}

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

function createIsomorphicLink(context: GraphQlContext | undefined) {
  /**
   * SSG and SSR
   */
  if (typeof window === "undefined") {
    const { SchemaLink } = require("@apollo/client/link/schema");
    const { schema } = require("../graphql/schema.ts");
    return new SchemaLink({ schema: schema, context });
  }

  /**
   * Client-side
   */
  const { HttpLink } = require("@apollo/client");
  return new HttpLink({
    uri: "/api/graphql",
    credentials: "same-origin",
  });
}

function createApolloClient(context?: GraphQlContext): ApolloClient<any> {
  return new ApolloClient({
    /**
     * Enable SSR mode when not running on the client-side
     */
    ssrMode: typeof window === "undefined",
    link: createIsomorphicLink(context),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(
  initialState: any = null,
  context?: GraphQlContext
): ApolloClient<any> {
  const _apolloClient = apolloClient ?? createApolloClient(context);

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  /**
   * SSG and SSR
   * Always create a new Apollo Client
   */
  if (typeof window === "undefined") {
    return _apolloClient;
  }

  // Create the Apollo Client once in the client
  apolloClient = apolloClient ?? _apolloClient;

  return apolloClient;
}

export const getApolloClient = initializeApollo;

export function useApollo(initialState: any) {
  const apolloStore = useMemo(
    () => initializeApollo(initialState),
    [initialState]
  );
  return apolloStore;
}
