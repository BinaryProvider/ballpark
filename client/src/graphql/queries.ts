import gql from 'graphql-tag';

export const STORY = gql`
  query getStory($id: ID!) {
    story(id: $id) {
      id
      description
      creator
      estimations {
        point
        user
      }
    }
  }
`;
