import React from 'react';

import {
  FormatStoryPoint,
  StoryPointBackground,
  StoryPointForeground
} from '../../pages/story';
import styles from './estimation-box.module.scss';

const EstimationBox: React.FC<any> = props => {
  const backgroundColor = StoryPointBackground(props.point);
  const textColor = StoryPointForeground(props.point);

  return (
    <>
      {props.point != null && (
        <div
          className={`${styles['box']} ${backgroundColor} ${textColor} ${
            props.point != null ? 'opaque visible' : 'transparent invisible'
          } d-flex flex-column p-3 align-items-center justify-content-center flex-grow-1 flex-md-grow-0 ml-3 ml-md-0 mb-0 mb-md-4`}
        >
          <div>{props.title}</div>
          <h1>{FormatStoryPoint(props.point)}</h1>
        </div>
      )}
    </>
  );
};

export default EstimationBox;
