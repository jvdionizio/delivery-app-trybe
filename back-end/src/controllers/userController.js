const userServices = require('../services/userServices');

const login = async (req, res) => {
  const { email, password } = req.body;
  
  const validEmail = await userServices.checkEmail(email, password);
  
  const userObj = await userServices.login(validEmail);
  
  if (!validEmail) {
    return res.status(404).json({ message: 'User not found' });
  }

  return res.status(200).json(userObj);
};

module.exports = {
  login,
};
