const graqhql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = graqhql;

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    id: { type: GraphQLID },
    email: { type: GraphQLString }
  }
});

module.exports = UserType;
