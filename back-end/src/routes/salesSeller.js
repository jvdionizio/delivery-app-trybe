const express = require('express');
const salesController = require('../controllers/salesController');

const salesSellerRoute = express.Router();

salesSellerRoute.get('/:id', salesController.getAllBySellerId);

module.exports = salesSellerRoute;
