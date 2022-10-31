const joi = require('joi');

const userSchemas = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});

module.exports = userSchemas;
