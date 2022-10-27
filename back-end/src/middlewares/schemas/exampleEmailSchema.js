const joi = require('joi');

const RES_MESSAGE = 'Some required fields are missing';

const exampleEmailSchema = joi.object({
  email: joi.string().email().required().messages({
    'any.required': `400|${RES_MESSAGE}`,
    'string.base': `400|${RES_MESSAGE}`,
    'string.empty': `400|${RES_MESSAGE}`,
    'string.email': `400|${RES_MESSAGE}`,
  }),
});

module.exports = exampleEmailSchema;
