const salesService = require('../services/salesService');

const getAllByUserId = async (req, res) => {
  const { userId } = req.body;

  const sales = await salesService.getAllByUserId(userId);
  res.status(200).json(sales);
};

module.exports = {
  getAllByUserId,
};