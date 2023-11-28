const router = require('express').Router();

const category_routes = require('./category_routes');
const product_routes = require('./product_routes');
const order_routes = require('./order_routes');

router.use('/categories', category_routes);
router.use('/products', product_routes);
router.use('/orders', order_routes);

module.exports = router;
