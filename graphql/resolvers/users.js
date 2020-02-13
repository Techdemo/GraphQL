const User = require('../../models/user');

module.exports = {
  users: async () => {
    try {
      const users = await User.find()
      return users.map(user => {
        return { ...user._doc, _id: user.id };
      });
    } catch (err) {
      throw err
    }
  }
}