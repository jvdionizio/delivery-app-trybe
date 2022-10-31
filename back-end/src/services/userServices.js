const md5 = require('md5');
const { Users } = require('../database/models');
const JWTAuth = require('../auth/JWTAuth');

const checkEmail = async (address, password) => {
  const md5Password = md5(password);

  const data = await Users.findOne({
      where: { email: address, password: md5Password },
      attributes: { exclude: 'password' },
  });

  if (data) {
    return data.dataValues;
  }
  return data;
};

const login = async (userObj) => {
  const token = JWTAuth.createToken(userObj);

  return { ...userObj, token };
};

module.exports = {
  login,
  checkEmail,
};
