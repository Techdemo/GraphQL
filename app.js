const express = require('express')
const bodyParser = require('body-parser')
const graphqlHttp = require('express-graphql')
const mongoose = require('mongoose')
const compression = require('compression')
const app = express();
const path = require('path')

const graphQlSchema = require('./graphql/schema/index')
const graphQlResolvers = require('./graphql/resolvers/index')
const isAuth = require('./middleware/is-auth')
const cors = require('./middleware/cors')

app
  .use(cors)
  .use(compression())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(express.static('public'))
  .use(express.json())
  .use(isAuth)
  .use(
  '/graphql',
  graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
  })
);

const PORT = process.env.PORT || 3001

mongoose
  .connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-xn2pr.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  }).catch(err => {
    console.log(err)
  })

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'build/index.html'));
})
