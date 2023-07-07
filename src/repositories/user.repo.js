const User = require("../domain/entities/User");

module.exports = class userRepo {
  static async create(name, email, password) {
    const user = new User({
      name: name,
      email: email,
      password: password,
    });

    return user.save();
  }

  static async login(email, password) {
    return User.findOne({ email: email });
  }

  static async getUser(email) {
    return User.findOne(email);
  }
};
