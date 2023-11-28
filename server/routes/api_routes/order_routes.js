const router = require('express').Router();
const { isAuthenticate } = require('../../controllers/helpers');

const { getAllOrders } = require('../../controllers/order_controller');

router.route('/')
  .get(isAuthenticate, getAllOrders);


module.exports = router;
