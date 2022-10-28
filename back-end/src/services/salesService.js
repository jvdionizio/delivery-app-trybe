const { Sales, SalesProducts, Products, Users } = require('../database/models');

const getAllByUserId = async (userId) => Sales.findAll({ where: { userId } });

const getAllBySellerId = async (sellerId) => Sales.findAll({ where: { sellerId } });

const getAllBySaleId = async (saleId) => {
  const sale = await Sales.findByPk(saleId, {
    include: [{
        model: Products,
        as: 'salesProducts',
        through: {
          model: SalesProducts,
          as: 'productsSales',
          attributes: ['quantity'],
        },
      }],
    attributes: { exclude: ['deliveryAddress', 'deliveryNumber'] },
  });

  return sale;
};

const getSellerById = async (sellerId) => {
  const test = await Users.findByPk(sellerId, {
      attributes: { exclude: ['id', 'email', 'password', 'role'] },
  });
  console.log(sellerId);
  console.log(test);
  return test;
};

const getByPk = async (id) => Sales.findByPk(id);

const updateStatusBySaleId = async (saleId, status) => {
  const sale = await Sales.findByPk(saleId);
  sale.status = status;
  await sale.save();
};

module.exports = {
  getAllByUserId,
  getAllBySellerId,
  getAllBySaleId,
  getByPk,
  updateStatusBySaleId,
  getSellerById,
};
