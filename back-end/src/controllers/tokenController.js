const verifyToken = require('../../utils/verifyToken');

const verifyTokenController = async (req, res) => {
  const { token } = req.body;

  const user = verifyToken(token);

  if (user.message) {
    return res.status(401).json({ message: user.message });
  }

  return res.status(200).json(user);
}

module.exports = verifyTokenController;