const { Users } = require('../database/models');

const login = async (address, password) => {
  const userEmail = await Users.findOne({
    where: {
      email: address,
      password: password,
    }, raw: true,
  });

  return userEmail;
}

module.exports = {
  login,
}