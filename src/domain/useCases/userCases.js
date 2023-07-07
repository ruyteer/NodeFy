const userRepo = require("../../repositories/user.repo");
const argon2 = require("argon2");
const User = require("../entities/User");

module.exports = class userCases {
  static async createUser(name, email, password) {
    if (!name || !email || !password) {
      throw new Error("Por favor, preencha todos os campos");
    }

    const userExists = await User.findOne({ email: email });

    if (userExists) {
      throw new Error("O email já existe, utilize outro email");
    }

    const hash = await argon2.hash(password);

    return userRepo.create(name, email, hash);
  }

  static async login(email, password) {
    if (!email || !password) {
      throw new Error("Preencha todos os campos");
    }

    const userExists = await userRepo.login(email, password);

    if (!userExists) {
      throw new Error("O email não existe, utilize outro email");
    }

    const verify = await argon2.verify(userExists.password, password);

    if (verify == false) {
      throw new Error("Senha incorreta");
    }

    return userExists;
  }

  static async getUser(email) {
    return userRepo.getUser(email);
  }
};
