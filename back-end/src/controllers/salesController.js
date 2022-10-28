const salesService = require('../services/salesService');

const getAllByUserId = async (req, res) => {
  const { id } = req.params;

  const sales = await salesService.getAllByUserId(id);
  console.log(sales);

  if (sales.length === 0) {
    throw new Error('404|Cannot find any sale');
  }

  res.status(200).json(sales);
};

const getAllById = async (req, res) => {
  const { id } = req.params;

  const sales = await salesService.getAllBySaleId(id);

  if (!sales) {
    throw new Error('404|Cannot find any sale');
  }

  res.status(200).json(sales);
};

const updateStatusBySaleId = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const sale = await salesService.getByPk(id);
  if (!sale) {
    throw new Error('404|Cannot find any sale');
  }

  await salesService.updateStatusBySaleId(id, status);
  
  res.status(200).json({ message: `Sale ${id}: Status updated to ${status}` });
};

const getSellerById = async (req, res) => {
  const { id } = req.params;

  const seller = await salesService.getSellerById(id);

  if (!seller) {
    throw new Error('404|Cannot find any seller');
  }

  res.status(200).json(seller);
};

module.exports = {
  getAllByUserId,
  getAllById,
  updateStatusBySaleId,
  getSellerById,
};