require('express-async-errors');
const cors = require('cors');
const express = require('express');

const routes = require('../routes');
const errorMiddleware = require('../middlewares/errors.middleware');

const verifyTokenController = require('../controllers/tokenController');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/images', express.static('public'));
app.use('/test', routes.testRoute);
app.use('/login', routes.userRoute);
app.use('/customer/orders', routes.salesRoute);
app.use('/customer/checkout', routes.checkoutRoute);
app.use('/products', routes.productsRoute);
app.post('/token', verifyTokenController);
app.get('/coffee', (_req, res) => res.status(418).end());

app.use(errorMiddleware);

module.exports = app;
