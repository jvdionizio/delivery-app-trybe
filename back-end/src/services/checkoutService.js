const { SalesProducts } = require('../databases/models');
// const joiCheckout = require('../middlewares/errors.middleware');

const CheckoutServices = {

  addSale: async (body) => {
    // joiCheckout.validate(body);
    const { itemNumber, productId, quantity } = body
    const productCreated = await SalesProducts.create({
      itemNumber, productId, quantity
    });
    console.log(productCreated);
  },
};

module.exports = CheckoutServices;
