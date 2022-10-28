const productsController = require('../controllers/productsController');

const express = require('express');

const productsRoute = express.Router();

productsRoute.get('/', productsController.getAll);

module.exports = productsRoute;
