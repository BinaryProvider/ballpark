import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';

import {
  useGetStoryQuery,
  useGetEstimationsSubscription,
  useEstimateMutation
} from '../../generated/graphql';

import styles from './story-details.module.scss';

import StoryDescription from '../story-description';
import StoryInfo from '../story-info';
import StoryPoints from '../story-points';
import StoryResults from '../story-results';
import GenericError from '../generic-error';

const StoryDetails: React.FC<any> = props => {
  const storyId = props.match.params.id;

  const [estimations, setEstimations] = useState();
  const [yourEstimation, setYourEstimation] = useState();

  const updateYourEstimation = (estimations: any): void => {
    const estimation = estimations.find(
      (data: any) => data.user === props.username
    );
    setYourEstimation(estimation ? estimation.point : null);
  };

  const {
    data: storyData,
    error: storyError,
    loading: isStoryLoading
  } = useGetStoryQuery({
    variables: {
      id: storyId
    },
    skip: !storyId,
    onCompleted: data => {
      if (!data || !data.story) {
        return;
      }
      const estimations = data.story.estimations;
      setEstimations(estimations);
      updateYourEstimation(estimations);
    }
  });

  useGetEstimationsSubscription({
    variables: {
      story: storyId
    },
    onSubscriptionData: data => {
      if (!data || !data.subscriptionData || !data.subscriptionData.data) {
        return;
      }
      const estimations = data.subscriptionData.data.estimationDone.estimations;
      setEstimations(estimations);
      updateYourEstimation(estimations);
    }
  });

  const [estimate] = useEstimateMutation();

  const castVote = (point: number): void => {
    if (!storyId || !props.username || point === yourEstimation) {
      return;
    }

    estimate({
      variables: {
        story: storyId,
        point: point,
        user: props.username
      }
    });
  };

  if (isStoryLoading) {
    return (
      <div className="flex-grow-1 d-flex flex-column justify-content-center">
        <Spinner
          className="spinner-large"
          animation="border"
          variant="primary"
        />
      </div>
    );
  }

  if (storyError || !storyData) {
    return (
      <GenericError
        title="Oops!"
        message="Something went wrong when we tried to load that user story. Try to reload the page."
      />
    );
  }

  const storyProps = {
    story: storyData && storyData.story ? storyData.story : null,
    estimations: estimations ? estimations : [],
    yourEstimation: yourEstimation,
    castVote: (point: number): void => castVote(point)
  };

  return (
    <div
      className={`${styles['story']} d-flex flex-column flex-md-row full-page col-12 px-2 px-sm-4 flex-grow-1`}
    >
      <div className="d-flex flex-column col-12 col-md-8 col-lg-9 order-1 order-md-0 flex-grow-1 flex-shrink-1 flex-auto">
        <StoryDescription {...storyProps} />
        <StoryPoints {...storyProps} />
        <StoryResults {...storyProps} />
      </div>
      <div className="col-12 col-md-4 col-lg-3 order-0 order-md-1 d-flex flex-grow-0 flex-shrink-1 flex-column flex-auto">
        <StoryInfo {...storyProps} />
      </div>
    </div>
  );
};

export default StoryDetails;
