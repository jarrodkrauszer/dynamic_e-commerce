const router = require('express').Router();
const { authenticate } = require('../../controllers/helpers');

const { getAllProducts } = require('../../controllers/product_controller');

router.route('/')
  .get(authenticate, getAllProducts)

module.exports = router;