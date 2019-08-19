import React from 'react';

import EstimationBox from '../estimation-box';

import { StoryPoints } from '../../pages/story';

const BallparkFigure: React.FC<any> = props => {
  const numEstimations = props.estimations.length;
  const sumEstimations = props.estimations.reduce(
    (sum: number, estimate: any) => (sum = sum + estimate.point),
    0
  );

  const averageEstimation = numEstimations
    ? sumEstimations / numEstimations
    : null;

  const ballparkFigure =
    averageEstimation != null && props.yourEstimation != null
      ? StoryPoints.reduce(function(prevPoint, currPoint) {
          return Math.abs(currPoint - averageEstimation) <
            Math.abs(prevPoint - averageEstimation)
            ? currPoint
            : prevPoint;
        })
      : null;

  return (
    <>
      <EstimationBox title={'Ballpark Figure'} point={ballparkFigure} />
    </>
  );
};

export default BallparkFigure;
