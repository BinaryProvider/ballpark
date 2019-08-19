import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

import StoryPointCard from '../story-point-card';
import StorySectionHeader from '../story-section-header';

import { StoryPoints as AvailableStoryPoints } from '../../pages/story';

const StoryPoints: React.FC<any> = props => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <StorySectionHeader
        title="Choose a story point"
        class="text-danger"
        panelId="story-points"
        open={open}
        onClick={() => setOpen(!open)}
      />
      <Collapse in={open}>
        <div id="story-points" className="mb-4">
          <div className="d-flex flex-row flex-wrap justify-content-center justify-content-md-start">
            {AvailableStoryPoints.map((storyPoint, index) => (
              <StoryPointCard
                key={index}
                index={index}
                point={storyPoint}
                {...props}
              />
            ))}
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default StoryPoints;
