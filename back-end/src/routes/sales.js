const express = require('express');
const salesController = require('../controllers/salesController');

const salesRoute = express.Router();

salesRoute.get('/:id', salesController.getAllByUserId);
salesRoute.get('/details/:id', salesController.getAllById);
salesRoute.get('/seller/:id', salesController.getSellerById);
salesRoute.put('/:id', salesController.updateStatusBySaleId);

module.exports = salesRoute;
