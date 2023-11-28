const router = require('express').Router();

const category_routes = require('./category_routes');
const product_routes = require('./product_routes');

router.use('/categories', category_routes);
router.use('/products', product_routes);

module.exports = router;
