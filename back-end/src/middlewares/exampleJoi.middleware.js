const exampleEmailSchema = require('./schemas/exampleEmailSchema');

const exampleJoiValidation = (req, res, next) => {
  try {
    const { email } = req.body;

    const { error } = exampleEmailSchema.validate({ email });

    if (error) {
      const [code, message] = error.message.split('|');
      return res.status(Number(code)).json({ message });
    }

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = exampleJoiValidation;
