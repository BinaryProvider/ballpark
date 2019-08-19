import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Register from '../../components/register';
import Dashboard from '../../components/dashboard';

const Home: React.FC<any> = props => {
  return (
    <div className="page col-12 col-lg-8 d-flex flex-column flex-grow-1 align-items-center justify-content-center p-4 pb-5">
      <Switch>
        {props.username && (
          <Route
            path="/"
            render={(): JSX.Element => <Dashboard {...props} />}
          />
        )}
        <Route render={(): JSX.Element => <Register {...props} />} />
      </Switch>
    </div>
  );
};

export default Home;
