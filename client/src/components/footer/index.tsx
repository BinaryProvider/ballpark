import React from 'react';

import styles from './footer.module.scss';

const Footer: React.FC = () => {
  return (
    <div className={`${styles['footer']} d-flex flex-row w-100 p-4 border-top`}>
      <span>© John Hellbom</span>
      <div className="d-flex flex-row flex-grow-1 justify-content-end">
        <span className="px-2">
          <a
            href={'https://github.com/BinaryProvider'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link"
          >
            {' '}
            <i className="ion-logo-github mr-1"></i>
            GitHub
          </a>
        </span>
        <span className="px-2">
          <a
            href={'https://www.linkedin.com/in/johnhellbom/'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link"
          >
            {' '}
            <i className="ion-logo-linkedin mr-1"></i>
            LinkedIn
          </a>
        </span>
        <span className="px-2">
          <a
            href={'https://www.johnhellbom.com'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link"
          >
            <i className="ion-md-heart mr-1"></i>
            Portfolio
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
