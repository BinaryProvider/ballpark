import React, { useState } from 'react';
import StorySectionHeader from '../story-section-header';
import { Collapse } from 'react-bootstrap';

const StoryDescription: React.FC<any> = props => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <StorySectionHeader
        title="User story"
        class="text-primary"
        panelId="story-description"
        open={open}
        onClick={() => setOpen(!open)}
      />
      <Collapse in={open}>
        <div id="story-description" className="mb-4">
          <h3>{props.story ? props.story.description : ''}</h3>
        </div>
      </Collapse>
    </>
  );
};

export default StoryDescription;
