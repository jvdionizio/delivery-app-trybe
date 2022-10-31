const express = require('express');
const userController = require('../controllers/userController');
const userJoiValidation = require('../middlewares/userJoi.middleware');

const userRoute = express.Router();

userRoute.post('/', userJoiValidation, userController.login);

module.exports = userRoute;