import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/ballpark-logo.svg';
import styles from './header.module.scss';

const Header: React.FC<any> = props => {
  return (
    <div
      className={`${styles['header']} border-bottom p-3 d-flex align-items-center`}
    >
      <div className="p-1">
        <Link to="/">
          <Logo className={`${styles['logo']}`} />
        </Link>
      </div>
      <div className="d-flex flex-grow-1 justify-content-end">
        <Link
          to="/story/create"
          className={`btn-link px-3 ${props.username ? '' : 'disabled'}`}
        >
          <i className="ion-md-add mr-2"></i>
          Create story
        </Link>
        <Link
          to="/story/estimate"
          className={`btn-link px-3 ${props.username ? '' : 'disabled'}`}
        >
          <i className="ion-md-stats mr-2"></i>
          Estimate story
        </Link>
      </div>
    </div>
  );
};

export default Header;
