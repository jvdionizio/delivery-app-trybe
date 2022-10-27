const errorMiddleware = (err, _req, res, _next) => {
  console.log(err);

  // Cond example
  // if (err.name === 'JsonWebTokenError') {
  //   return res.status(401).json({ message: 'Expired or invalid token' });
  // }

  return res.status(500).json({ message: err.message });
};

module.exports = errorMiddleware;
