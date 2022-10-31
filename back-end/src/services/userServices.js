const md5 = require('md5');
const { Users } = require('../database/models');
const JWTAuth = require('../auth/JWTAuth');

const login = async (address, password) => {
  const data = await Users.findOne({
    where: { email: address },
  });

  if (!data) throw new Error('User not Found');

  const md5Password = md5(password);

  const token = JWTAuth.createToken({ address, md5Password });

  return token;
};

module.exports = {
  login,
};