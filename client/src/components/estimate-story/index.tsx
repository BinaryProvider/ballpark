import React, { useState } from 'react';
import { Redirect } from 'react-router';

import styles from './estimate-story.module.scss';
import { useInput } from '../../hooks/useInput';
import { useGetStoryQuery } from '../../generated/graphql';

const EstimateStory: React.FC<any> = () => {
  const [queryStory, setQueryStory] = useState(false);
  const [isInvalidStory, setIsInvalidStory] = useState(false);

  const {
    value: storyId,
    bind: bindStoryId,
    validationClasses: storyIdValidationClasses
  } = useInput('', false);

  const {
    data: storyData,
    // error: storyDataError,
    loading: isStoryDataLoading
  } = useGetStoryQuery({
    variables: {
      id: storyId.toString()
    },
    skip: !queryStory,
    fetchPolicy: 'network-only',
    onCompleted: () => {
      if (storyData && !storyData.story) {
        setIsInvalidStory(true);
      }
      setQueryStory(false);
    },
    onError: () => {
      setQueryStory(false);
    }
  });

  if (storyData && storyData.story) {
    return <Redirect to={`/story/${storyData.story.id}`} />;
  }
  // TOTO: Show toast on query error

  const handleFormSubmit = (event: React.FormEvent): void => {
    setIsInvalidStory(false);
    setQueryStory(true);
    event.preventDefault();
  };

  return (
    <div className="page col-12 col-lg-8 d-flex flex-column flex-grow-1 align-items-center justify-content-center p-4 pb-5">
      <div className={`${styles['estimate-story']} d-flex flex-column w-100`}>
        <div className="panel">
          <div className="header">
            <i className="ion-md-stats mr-3"></i>
            Estimate story
          </div>
          <div className="body no-gutters">
            <form
              autoComplete="off"
              autoCorrect="false"
              onSubmit={handleFormSubmit}
            >
              <div className="form-group">
                <div className="d-flex flex-row mb-3">
                  <input
                    className={`form-control form-control-lg flex-grow-1 text-center ${storyIdValidationClasses()}  ${
                      isInvalidStory ? 'is-invalid' : ''
                    } `}
                    placeholder="Enter code"
                    maxLength={5}
                    {...bindStoryId}
                  ></input>
                  <button className="col-2 btn btn-lg btn-secondary">
                    {!!isStoryDataLoading && (
                      <i className="spinner-border spinner-border-lg"></i>
                    )}
                    {!isStoryDataLoading && (
                      <i className="icon ion-md-arrow-round-forward"></i>
                    )}
                  </button>
                </div>
                <div
                  className={`invalid-feedback mt-4 ${
                    isInvalidStory ? 'd-flex' : ''
                  }`}
                >
                  <i className="ion-md-alert mr-2"></i>
                  That user story does not exist
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstimateStory;
