const CheckoutServices = require('../services/checkoutServices');

const CheckoutController = {
  addSale: async (req, res) => {
    const { itemNumber, productId, quantity } = req.body;

    await CheckoutServices.addSale({
      itemNumber, productId, quantity 
    });
    return res.status(201).json('created');
  },

};

module.exports = CheckoutController;
