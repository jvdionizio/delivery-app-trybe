const errorMiddleware = (err, _req, res, _next) => {

  // Cond example
  // if (err.name === 'JsonWebTokenError') {
  //   return res.status(401).json({ message: 'Expired or invalid token' });
  // }

  res.status(500).json({ message: err.message });
}

module.exports = errorMiddleware;
