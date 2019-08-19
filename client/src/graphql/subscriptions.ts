import gql from 'graphql-tag';

export const ESTIMATIONS = gql`
  subscription getEstimations($story: ID!) {
    estimationDone(story: $story) {
      estimations {
        point
        user
      }
    }
  }
`;
