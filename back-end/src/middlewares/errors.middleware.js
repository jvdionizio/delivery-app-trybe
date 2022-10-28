const errorMiddleware = (err, _req, res, _next) => {
  console.log(err);

  if (err.message === '404|Cannot find any sale') {
    const [code, message] = err.message.split('|');
    return res.status(Number(code)).json({ message });
  }

  return res.status(500).json({ message: err.message });
};

module.exports = errorMiddleware;
