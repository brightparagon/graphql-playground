import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import LoginForm from './LoginForm';

const App = (props) => {
  return (
    <div className='container'>
      <Header />
      <Switch>
        <Route exact path='/login' component={LoginForm} />    
      </Switch>
    </div>
  );
};

export default App;
