const express = require('express')
const expressGraphQL = require('express-graphql')

const app = express()

app.use('/graphql', expressGraphQL({
  graphiql: true // for development purpose
}))

app.listen(4004, () => {
  console.log('Server Listening')
})
