import React, { useState } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import styles from './story-data.module.scss';

const StoryData: React.FC<any> = props => {
  const [copiedText, setCopiedText] = useState();

  const storyCode = props.story ? props.story.id : '';

  const copyCode = async () => {
    try {
      if (copiedText) return;

      await navigator.clipboard.writeText(storyCode);

      setCopiedText(storyCode);

      setTimeout(function() {
        setCopiedText(null);
      }, 2000);
    } catch (err) {}
  };

  return (
    <div className="panel panel-sm flex-grow-1 flex-md-grow-0 mb-0 mb-md-4">
      <div className="body p-4">
        <div className="mb-2 d-none d-md-flex">Access code</div>
        <OverlayTrigger
          key="CodeTooltip"
          placement="top"
          overlay={
            <Tooltip id="code-tooltip">
              {copiedText ? 'Copied!' : 'Click to copy'}
            </Tooltip>
          }
        >
          <div
            className={`${styles['code']}`}
            data-toggle="tooltip"
            data-placement="bottom"
            onClick={() => copyCode()}
          >
            {storyCode}
          </div>
        </OverlayTrigger>
        <div className="d-flex mt-4 align-items-center no-gutters">
          <div className="col-8 flex-grow-1 ">Total votes</div>
          <div className={`${styles['num-box']} col-4 text-center`}>
            {props.estimations.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryData;
