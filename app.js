const express = require('express')
const bodyParser = require('body-parser')
const graphqlHttp = require('express-graphql')
const { buildSchema } = require('graphql')
const mongoose = require('mongoose');

const User = require('./models/user')

const app = express()

app.use(bodyParser.json())

app.use('/graphql', graphqlHttp({
  schema: buildSchema(`
    type User {
      _id: ID!
      name: String!
      age: Int!
      city: String!
    }

    input UserInput {
      name: String!
      age: Int!
      city: String!
    }

    type RootQuery {
      users: [User!]!
    }

    type RootMutation {
      createUser(userInput: UserInput): User
    }

    schema {
      query: RootQuery,
      mutation: RootMutation
    }
  `),
  rootValue: {
    users: () => {
     return User.find()
      .then(users => {
        return users.map(user => {
          return { ...user._doc, _id: user.id }
        })
      }).catch(err => {
        throw err
      })
    },
    createUser: (args) => {
      const user = new User({
        name: args.userInput.name,
        age: args.userInput.age,
        city: args.userInput.city,
      })
      return user
      .save().then(result => {
        console.log(result)
        return {...result._doc}
      }).catch(err => {
        console.log(err)
        throw err
      })
    }
  },
  graphiql: true
})
);

mongoose
  .connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-xn2pr.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`)
  .then(() => {
    app.listen(3001)
  }).catch(err => {
    console.log(err)
  })
