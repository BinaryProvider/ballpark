import React, { useState } from 'react';
import { Redirect } from 'react-router';

import styles from './create-story.module.scss';
import { useCreateStoryMutation } from '../../generated/graphql';
import { useInput } from '../../hooks/useInput';
import { useStorage } from '../../hooks/useStorage';

const CreateStory: React.FC = () => {
  const [username] = useStorage('Username', '');

  const {
    value: story,
    bind: bindStory,
    isValid: isStoryValid,
    isTouched: isStoryTouched,
    isDirty: isStoryDirty,
    validationClasses: storyValidationClasses,
    validate: validateStory
  } = useInput('', true);

  const [createdStory, setCreatedStory] = useState();
  const [redirectToStory, setRedirectToStory] = useState(false);
  const [createStory, { error, loading }] = useCreateStoryMutation();

  const isFormValid = username && isStoryValid;

  const handleFormSubmit = (event: React.FormEvent): void => {
    validateStory();

    if (isFormValid) {
      createStory({
        variables: {
          description: story.toString(),
          creator: username
        }
      }).then((result: any) => {
        setCreatedStory(result.data.createStory);
        setRedirectToStory(true);
      });
    }

    event.preventDefault();
  };

  const renderRedirectToStory = (): React.ReactElement | undefined => {
    if (redirectToStory) {
      return <Redirect to={`/story/${createdStory.id}`} />;
    }
  };

  const renderError = (): React.ReactElement | undefined => {
    if (error) {
      return <div>ERROR</div>;
    }
  };

  return (
    <div className="page col-12 col-lg-8 d-flex flex-column flex-grow-1 align-items-center justify-content-center p-4 pb-5">
      <div className={`${styles['create-story']} d-flex flex-column w-100`}>
        <div className="panel">
          <form
            autoComplete="off"
            autoCorrect="false"
            onSubmit={handleFormSubmit}
          >
            <div className="header">
              <i className="ion-md-list mr-3"></i>
              Create story
            </div>
            <div className="body">
              {renderRedirectToStory()}
              {renderError()}
              <div className="form-group">
                <textarea
                  className={`form-control form-control-lg ${storyValidationClasses()}`}
                  id="Story"
                  name="story"
                  placeholder="Write a user story"
                  rows={3}
                  disabled={loading}
                  {...bindStory}
                ></textarea>
              </div>
            </div>
            <div className="footer">
              <div
                className={`invalid-feedback d-none ${
                  isStoryValid
                    ? ''
                    : isStoryDirty || isStoryTouched
                    ? 'd-sm-flex'
                    : ''
                }`}
              >
                <i className="ion-md-alert mr-2"></i>
                Please write a user story
              </div>
              <button
                type="submit"
                className="col-12 col-sm-6 col-lg-4 btn btn-lg btn-success d-flex flex-row justify-content-center align-items-center"
              >
                {!!loading && (
                  <span className="spinner-border spinner-border-sm mr-2"></span>
                )}
                <i className="ion-md-add mr-2"></i>
                Create story
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateStory;
