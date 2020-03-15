const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type User {
  id: ID!
  email: String!
  password: String
  city: String
  age: Int
  name: String
}

type AuthData {
  userId: ID!
  token: String!
  tokenExpiration: Int!
  name: String!
}

input UserInput {
  email: String!
  password: String!
  age: Int
  city: String
  name: String
}

type RootQuery {
  users: [User!]!
  user(id: String!): User!
  login(email: String!, password: String!): AuthData!
}

type RootMutation {
  createUser(userInput: UserInput): User
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`);