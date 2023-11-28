const router = require('express').Router();

const { getAllOrders } = require('../../controllers/order_controller');

router.route('/')
  .get(getAllOrders);


module.exports = router;
