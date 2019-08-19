import React from 'react';
import ReactDOM from 'react-dom';
import { HttpLink, split, ApolloClient, InMemoryCache } from 'apollo-boost';
import { WebSocketLink } from 'apollo-link-ws';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';

import * as serviceWorker from './serviceWorker';
import './index.scss';

import App from './app';
import { getMainDefinition } from 'apollo-utilities';

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_API_HTTP_URL
});

const wsLink = new WebSocketLink({
  uri: `${process.env.REACT_APP_API_WS_URL}`,
  options: {
    reconnect: true
  }
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <App />
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
