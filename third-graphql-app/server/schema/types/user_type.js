const graqhql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString
} = graqhql;

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    email: {
      type: GraphQLString
    }
  }
});

module.exports = UserType;
