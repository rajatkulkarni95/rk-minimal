import { gql } from "@apollo/client";

export const GET_ALL_BOOKMARKS = gql`
  query getBookmarks {
    bookmarks {
      uuid
      url
      title
      tag {
        uuid
        name
        background
        border
        color
      }
    }
  }
`;
