const express = require('express')
const bodyParser = require('body-parser')
const graphqlHttp = require('express-graphql')
const { buildSchema } = require('graphql')

const app = express()

app.use(bodyParser.json())

app.use('/graphql', graphqlHttp({
  schema: buildSchema(`
    type rootQuery {
      Users: [String!]!
    }
    type rootMutation {
      createUser(name: String): String
    }
    schema {
      query: rootQuery,
      mutation: rootMutation
    }
  `),
  rootValue: {
    Users: () => {
      return ['Bert', 'Ernie', 'Pino']
    },
    createUser: (args) => {
      const userName = args.name
      return userName
    }
  },
  graphiql: true
})
);

app.listen(3001)
