const express = require('express');
const salesController = require('../controllers/salesController');

const salesCustomerRoute = express.Router();

salesCustomerRoute.get('/:id', salesController.getAllByUserId);
salesCustomerRoute.get('/details/:id', salesController.getAllById);
salesCustomerRoute.get('/seller/:id', salesController.getSellerById);
salesCustomerRoute.put('/:id', salesController.updateStatusBySaleId);

module.exports = salesCustomerRoute;
