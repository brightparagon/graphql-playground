const graphql = require('graphql')
const _ = require('lodash')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema // this takes in root query and returns GraphQL instance
} = graphql

const users = [
  { id: '23', firstName: 'Bill', age: 20 },
  { id: '47', firstName: 'Samantha', age: 21 },
]

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
      // second argument args: id above is present on this argument
      resolve(parentValue, args) {
        return _.find(users, { id: args.id }) // this id will be provided to the query
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
