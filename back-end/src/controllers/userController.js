const userServices = require('../services/userServices');

const login = async (req, res) => {
  const { email, password } = req.body;
  const token = await userServices.login(email, password);

  return res.status(200).json(token);
}

module.exports = {
  login,
}