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
    console.log("ID", id)
    try {
      const user = await User.findOne({ _id: id });
      console.log("user", user.name)
      if (user) {
        return { ...user._doc, name: user.name, age: user.age, city: user.city };
      } else {
        throw new Error('User exists already.');
      }
    } catch (err) {
      console.log("error", err)
      throw err;
    }
  }
}