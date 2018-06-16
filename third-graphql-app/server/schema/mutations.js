const graqhql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString
} = graqhql;
const UserType = require('./types/user_type');
const AuthService = require('../services/auth');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      // third parameter - request is a request object Express gets from front and puts to this
      resolve(parentValue, { email, password }, req) {
        return AuthService.signup({ email, password, req });
      }
    }
  }
});

module.exports = mutation;
