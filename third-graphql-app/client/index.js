import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import App from './components/App';
import LoginForm from './components/LoginForm';

const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin' // this option attatches cookies to requests
  }
});

// apollo client is in charge of making requests between react and backend.
// but GraqhQL doesn't attach cookies to any requests.
// so it needs a custom option for it.
const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={LoginForm} />
          <Route path='/' component={App} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
