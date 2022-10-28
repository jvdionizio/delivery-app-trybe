const CheckoutServices = require('../services/checkoutServices');

const CheckoutController = {
  addSale: async (req, res) => {
    const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status } = req.body;

    await CheckoutServices.addSale({
      userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status
    });
    return res.status(201).json('created');
  },

};

module.exports = CheckoutController;