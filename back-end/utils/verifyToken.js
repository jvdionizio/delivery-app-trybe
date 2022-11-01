const jwt = require('jsonwebtoken');

const tokenKey = require('fs')
  .readFileSync('./jwt.evaluation.key', { encoding: 'utf-8' });

const verifyToken = (token) => {
  try {
    const decode = jwt.verify(token, tokenKey);

    return decode;
  } catch (err) {
    return err;
  }
};

module.exports = verifyToken;