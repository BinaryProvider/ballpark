import React from 'react';

import { FormatStoryPoint } from '../../pages/story';
import styles from './story-point-card.module.scss';

const StoryPointCard: React.FC<any> = props => {
  const yourEstimation = props.yourEstimation;
  const isSelected = props.point === yourEstimation;

  const storypointClass = (index: number): string => {
    return styles[`storypoint-${index}`];
  };

  return (
    <div
      className={`${styles['card']} ${storypointClass(props.index)} ${
        isSelected ? styles['active'] : ''
      } mr-4 mb-4 d-flex align-items-center justify-content-center`}
      onClick={(): void => props.castVote(props.point)}
    >
      <div className="body">{FormatStoryPoint(props.point)}</div>
    </div>
  );
};

export default StoryPointCard;
