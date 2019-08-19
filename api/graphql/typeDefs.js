const { gql } = require('apollo-server-express');

module.exports = gql`
  type Story {
    id: ID!
    description: String!
    creator: String!
    estimations: [Estimation!]
  }

  type Estimation {
    id: ID!
    story: Story!
    point: Float!
    user: String!
  }

  type Query {
    stories: [Story!]
    story(id: ID!): Story
    estimations: [Estimation!]
    estimation(story: ID!, user: String!): Estimation
  }

  type Mutation {
    createStory(description: String!, creator: String!): Story
    estimate(story: ID!, user: String!, point: Float!): Estimation
  }

  type Subscription {
    storyCreated: Story!
    estimationDone(story: ID!): Story!
  }
`;
