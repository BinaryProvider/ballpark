const { PubSub } = require('apollo-server-express');
const { withFilter } = require('graphql-subscriptions');

const Story = require('../models/story');
const Estimation = require('../models/estimation');

const STORY_CREATED = 'STORY_CREATED';
const ESTIMATION_DONE = 'ESTIMATION_DONE';

const pubsub = new PubSub();

module.exports = {
  Query: {
    stories: async () => await Story.find(),
    story: async (_, args) => await Story.findOne({ _id: args.id }),
    estimations: async () => await Estimation.find(),
    estimation: async (_, args) =>
      await Estimation.findOne({ story: args.story, user: args.user })
  },
  Story: {
    estimations: story => {
      return Estimation.find({ story: story._id });
    }
  },
  Estimation: {
    story: estimation => {
      return Story.findOne({ _id: estimation.story });
    }
  },
  Mutation: {
    createStory: async (_, args) => {
      try {
        let story = await Story.create(args);
        await pubsub.publish(STORY_CREATED, { storyCreated: story });
        return story;
      } catch (err) {
        return err.message;
      }
    },
    estimate: async (_, args) => {
      try {
        let estimation = await Estimation.findOneAndUpdate(
          { story: args.story, user: args.user },
          { point: args.point },
          { new: true }
        );

        if (!estimation) {
          estimation = await Estimation.create(args);
        }

        let story = await Story.findOne({ _id: estimation.story });
        await pubsub.publish(ESTIMATION_DONE, { estimationDone: story });

        return estimation;
      } catch (err) {
        return err.message;
      }
    }
  },
  Subscription: {
    storyCreated: {
      subscribe: () => pubsub.asyncIterator([STORY_CREATED])
    },
    estimationDone: {
      subscribe: withFilter(
        () => pubsub.asyncIterator([ESTIMATION_DONE]),
        (payload, variables) => {
          return payload.estimationDone._id == variables.story;
        }
      )
    }
  }
};
