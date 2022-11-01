const jwt = require('jsonwebtoken');

const verifyToken = (token) => {
  const tokenKey = require("fs")
    .readFileSync("./jwt.evaluation.key", { encoding: "utf-8" });

  try {
    const decode = jwt.verify(token, tokenKey);

    return decode;
  } catch (err) {
    return err;
  }
};

module.exports = verifyToken;