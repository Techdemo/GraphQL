const express = require('express')
const Router = express.Router()

Router.get('/', (req, res) => {
  res.render('home', {
    layout: 'default'
  })
})

module.exports = Router;