const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

module.exports = async (req) => {
  const headers = req.headers["authorization"];

  if (!headers) {
    throw new Error("Token não fornecido");
  }

  const token = headers.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    return decoded;
  } catch (error) {
    throw new Error("Token inválido");
  }
};
