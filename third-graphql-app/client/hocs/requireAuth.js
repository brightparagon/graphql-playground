import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import currentUserQuery from '../queries/CurrentUser';

// Auth HOC
export default (WrappedComponent) => {
  class RequireAuth extends Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.data.loading && !nextProps.data.user) { // if not authenticated, kick users to login page
        this.props.history.push('/login');
      }
    }
  }
  
  return graphql(currentUserQuery)(RequireAuth);
};
