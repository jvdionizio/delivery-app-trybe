const express = require('express');
const checkoutController = require('../controllers/checkoutController');

const CheckoutRouter = express.Router();

CheckoutRouter.post('', checkoutController.addSale);

module.exports = CheckoutRouter;
