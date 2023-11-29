const router = require('express').Router();

const category_routes = require('./category_routes');
const product_routes = require('./product_routes');
const order_routes = require('./order_routes');
const company_routes = require('./company_routes');
const sale_routes = require('./sale_routes');

router.use('/categories', category_routes);
router.use('/products', product_routes);
router.use('/orders', order_routes);
router.use('/company', company_routes);
router.use('/sales', sale_routes);

module.exports = router;
