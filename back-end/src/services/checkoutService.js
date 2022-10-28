const Sequelize = require('sequelize');
const config = require('../database/config/config');
const { Sales, SalesProducts } = require('../database/models');

const sequelize = new Sequelize(
  process.env.NODE_ENV === 'test' ? config.test : config.development,
);

const CheckoutServices = {
  addSale: async (body) => {
    const { userId, sellerId, totalPrice,
      deliveryAddress, deliveryNumber, status, products } = body;

    const result = await sequelize.transaction(async (t) => {
      const { id } = await Sales.create({
        userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate: Date(), status,
      }, { transaction: t });
  
      await SalesProducts.bulkCreate(
        products.map((prod) => ({
          saleId: id,
          productId: prod.id,
          quantity: prod.quantity,
        })),
        { transaction: t },
      );
  
      return id;
    });
    return result;
  },
};

module.exports = CheckoutServices;
