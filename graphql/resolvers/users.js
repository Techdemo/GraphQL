const User = require('../../models/user')

module.exports = {
  users: async () => {
    try {
      const users = await User.find()
      return users.map(user => {
        console.log(user)
        return { ...user._doc, _id: user.id };
      });
    } catch (err) {
      throw err
    }
  },
  user: async ({ id }) => {
    try {
      const user = await User.findOne({ id: id });
      if (user) {
        throw new Error('User exists already.');
      }
      return { ...result._doc, name: user.name, age: user.age };
    } catch (err) {
      throw err;
    }
  }
}