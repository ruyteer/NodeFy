const userCases = require("../domain/useCases/userCases");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

module.exports = class UserController {
  static async register(req, res) {
    const { name, email, password } = req.body;

    try {
      await userCases.createUser(name, email, password);
      res.json({
        msg: "Usuário criado com sucesso",
      });
    } catch (err) {
      res.status(500).json({
        error: err.message,
      });
      return;
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;

    try {
      const user = await userCases.login(email, password);

      const token = jwt.sign(
        {
          _id: user._id,
        },
        process.env.SECRET,
        { expiresIn: "1day" }
      );

      res.json({
        msg: "Logado com sucesso",
        token: token,
      });
    } catch (err) {
      res.status(500).json({
        error: err.message,
      });
    }
  }
};
