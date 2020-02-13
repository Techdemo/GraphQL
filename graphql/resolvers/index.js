const authResolver = require('./auth');
const eventsResolver = require('./events');
const bookingResolver = require('./booking');
const usersResolver = require('./users')

const rootResolver = {
  ...authResolver,
  ...eventsResolver,
  ...bookingResolver,
  ...usersResolver
};

module.exports = rootResolver;