import { gql } from "@apollo/client";

export const ADD_BOOKMARK = gql`
  mutation CreateBookmark($title: String!, $url: String!, $tagUuid: String!) {
    createBookmark(title: $title, url: $url, tagUuid: $tagUuid) {
      uuid
    }
  }
`;
