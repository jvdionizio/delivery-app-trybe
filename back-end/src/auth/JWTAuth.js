const jwt = require('jsonwebtoken');
require('dotenv').config();

const tokenKey = process.env.JWT_SECRET || 'secretKey'

const createToken = (data) => {
  const token = jwt.sign(
    { data }, tokenKey, { expiresIn: '7d', algorithm: 'HS256' }
  )

  return token;
}

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if(!token) throw new Error('Token not Found');

  const code = jwt.verify(token, tokenKey);
  req.data = code.data;
  next();
}

module.exports = {
  createToken,
  validateToken,
}