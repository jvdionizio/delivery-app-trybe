const userSchemas = require('./schemas/userSchemas');
const Users = require('../database/models/users');

const userJoiValidation = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const { error } = userSchemas.validate({ email, password });

    if (error) {
      res.status(404).json({ message: 'Invalid email/password' })
    }

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = userJoiValidation;
