import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC<any> = props => {
  return (
    <div className="page col-12 col-lg-8 d-flex flex-column flex-grow-1 align-items-center justify-content-center p-4 pb-5">
      <h1 className="text-center">Welcome {props.username}!</h1>
      <div className="slug d-inline-flex justify-content-center mt-4 w-100">
        <h5 className="col-10 text-center">
          Would you like to create a new user story or estimate an existing one?
        </h5>
      </div>
      <div className="d-flex flex-row py-5">
        <Link
          className="btn-lg btn-success mx-3 px-4"
          role="button"
          to="/story/create"
        >
          <i className="ion-md-add mr-2"></i>
          Create story
        </Link>
        <Link
          className="btn-lg btn-secondary mx-3 px-4"
          role="button"
          to="/story/estimate"
        >
          <i className="ion-md-stats mr-2"></i>
          Estimate story
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
