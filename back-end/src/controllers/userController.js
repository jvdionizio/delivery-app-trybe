const userServices = require('../services/userServices');

const login = async (req, res) => {
  const { email, password } = req.body;
  const token = await userServices.login(email, password);

  const validEmail = await userServices.checkEmail(email, password);

  if (!validEmail) {
    return res.status(404).json({ message: 'User not found' });
  }

  return res.status(200).json(token);
};

module.exports = {
  login,
};