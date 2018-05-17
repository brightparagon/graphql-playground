const graphql = require('graphql')
const axios = require('axios')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema // this takes in root query and returns GraphQL instance
} = graphql

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
})

// RootQuery: allows GraphQL enter into database and grab data
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } }, // query requires id argument to find an user
      
      // important: this resolve function is the one that actually returns data
      // second argument args: id above(from query) is present on this argument
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/users/${args.id}`)
          .then(resp => resp.data) // should send resp.data, not just response for GraphQL to understand
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
