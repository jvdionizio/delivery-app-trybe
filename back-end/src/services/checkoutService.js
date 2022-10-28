const { Sales } = require('../databases/models');

const CheckoutServices = {

  addSale: async (body) => {
    const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status } = body
    const productCreated = await Sales.create({
      userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate: Date(), status
    });
    console.log(productCreated);
  },
};

module.exports = CheckoutServices;
