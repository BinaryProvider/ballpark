import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { useStorage } from './hooks/useStorage';

import Home from './pages/home';
import Story from './pages/story';
import Header from './components/header';
import Footer from './components/footer';

const App: React.FC = () => {
  const [storedUsername, setStoredUsername] = useStorage('Username', '');

  const registerUser = (username: string): void => {
    setStoredUsername(username);
  };

  const props = {
    username: storedUsername
  };

  return (
    <Router>
      <Header {...props} />
      <div className="d-flex flex-column flex-grow-1 align-items-center justify-content-start p-3 py-5">
        <Switch>
          {storedUsername && (
            <Route
              exact
              path="/story/*"
              render={(): JSX.Element => <Story {...props} />}
            />
          )}
          <Route
            render={(): JSX.Element => (
              <Home registerUser={registerUser} {...props} />
            )}
          />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
