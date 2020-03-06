const express = require('express')
const Router = express.Router()
const graphQlSchema = require('../graphql/schema/index')
const graphQlResolvers = require('../graphql/resolvers/index')

Router.get('/login', (req, res) => {
  res.render('login', {
    layout: 'default',
  })
})

Router.post('/login-form', (req, res) => {
  // req body komt hier gewoon binnen.
  // hier stel je gewoon een query samen binnen graphql
  const name = req.body.name
  const password = req.body.password

  console.log("form data", req.body)
  res.redirect('/')
})

module.exports = Router;