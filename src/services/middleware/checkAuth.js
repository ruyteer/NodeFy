const jwt = require("jsonwebtoken");
const env = require("dotenv").config();

module.exports = (req, res, next) => {
  const headers = req.headers["authorization"];

  if (!headers) {
    res.status(404).json({
      error: "Token não encontrado nos headers",
    });
    return;
  }

  const token = headers && headers.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.SECRET);

    next();
  } catch (err) {
    res.status(500).json({
      error: "Token inválido",
    });
    return;
  }
};
