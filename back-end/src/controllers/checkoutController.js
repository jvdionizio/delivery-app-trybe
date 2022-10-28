const CheckoutServices = require('../services/checkoutService');

const CheckoutController = {
  addSale: async (req, res) => {
    const id = await CheckoutServices.addSale(req.body);
    return res.status(201).json(id);
  },

};

module.exports = CheckoutController;