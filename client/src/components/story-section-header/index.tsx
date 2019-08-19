import React from 'react';

import styles from './story-section-header.module.scss';

const StorySectionHeader: React.FC<any> = props => {
  return (
    <div
      onClick={props.onClick}
      aria-controls={props.panelId}
      aria-expanded={props.open}
      className={`${styles['header']} ${props.class} mb-4 pb-1 border-bottom d-flex`}
    >
      <div className={`${styles['arrow']} d-flex mr-2`}>
        <i className={`ion-ios-arrow-${props.open ? 'down' : 'forward'}`}></i>
      </div>
      <h6 className="flex-grow-1">{props.title}</h6>
    </div>
  );
};

export default StorySectionHeader;
