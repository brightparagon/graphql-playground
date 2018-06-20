import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Dashboard from './Dashboard';
import requireAuth from '../hocs/requireAuth';

const App = (props) => {
  return (
    <div className='container'>
      <Header />
      <Switch>
        <Route exact path='/login' component={LoginForm} />
        <Route exact path='/signup' component={SignupForm} />
        <Route exact path='/dashboard' component={requireAuth(Dashboard)} />
      </Switch>
    </div>
  );
};

export default App;
