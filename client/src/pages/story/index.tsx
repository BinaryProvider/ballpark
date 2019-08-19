import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CreateStory from '../../components/create-story';
import StoryDetails from '../../components/story-details';
import EstimateStory from '../../components/estimate-story';
import NotFound from '../not-found';

export const FormatStoryPoint = (point: number): string => {
  if (point == null) return '';
  return point !== 0.5 ? point.toString() : '\u00BD';
};
export const StoryPoints = [0, 0.5, 1, 2, 3, 5, 8, 13];
export const StoryPointIndex: { [key: string]: number } = {
  '0': 0,
  '0.5': 1,
  '1': 2,
  '2': 3,
  '3': 4,
  '5': 5,
  '8': 6,
  '13': 7
};
export const StoryPointForeground = (point: number) => {
  return `text-story-point-${
    StoryPointIndex[point != null ? point.toString() : 'none']
  }`;
};
export const StoryPointBackground = (point: number) => {
  return `bg-story-point-${
    StoryPointIndex[point != null ? point.toString() : 'none']
  }`;
};

const Story: React.FC<any> = props => {
  return (
    <Switch>
      <Route
        exact
        path="/story/create"
        render={(): JSX.Element => <CreateStory />}
      />
      ,
      <Route
        exact
        path="/story/estimate"
        render={(): JSX.Element => <EstimateStory />}
      />
      ,
      <Route
        exact
        path="/story/:id"
        render={(routerProps): JSX.Element => (
          <StoryDetails {...{ ...props, ...routerProps }} />
        )}
      />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Story;
