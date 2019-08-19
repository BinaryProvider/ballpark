import gql from 'graphql-tag';

export const CREATE_STORY = gql`
  mutation createStory($description: String!, $creator: String!) {
    createStory(description: $description, creator: $creator) {
      id
      description
      creator
    }
  }
`;

export const ESTIMATE = gql`
  mutation estimate($story: ID!, $user: String!, $point: Float!) {
    estimate(story: $story, user: $user, point: $point) {
      user
      point
    }
  }
`;
