const jwt = require('jsonwebtoken');

const verifyToken = (token) => {
  const JWT_SECRET = process.env.JWT_SECRET || 'secretKey';

  try {
    const decode = jwt.verify(token, JWT_SECRET);

    return decode;
  } catch (err) {
    return err;
  }
};

module.exports = verifyToken;