const express = require('express')
const expressGraphQL = require('express-graphql')
const schema = require('./schema/shema')

const app = express()

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true // for development purpose
}))

app.listen(4004, () => {
  console.log('Server Listening')
})
