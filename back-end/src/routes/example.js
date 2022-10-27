const express = require('express');
const exampleJoiValidation = require('../middlewares/exampleJoi.middleware');
const exampleController = require('../controllers/exampleController');

const testRoute = express.Router();

testRoute.post('/', exampleJoiValidation, exampleController.example);

module.exports = testRoute;
