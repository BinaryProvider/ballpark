import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

import StoryData from '../story-data';
import BallparkFigure from '../ballpark-figure';
import StorySectionHeader from '../story-section-header';

const StoryInfo: React.FC<any> = props => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <StorySectionHeader
        title="Info"
        class="text-secondary"
        panelId="story-info"
        open={open}
        onClick={() => setOpen(!open)}
      />
      <Collapse in={open}>
        <div id="story-info" className="mb-4">
          <div className="d-flex flex-row flex-md-column">
            <StoryData {...props} />
            <BallparkFigure {...props} />
          </div>
        </div>
      </Collapse>
    </>
  );
};

export default StoryInfo;
