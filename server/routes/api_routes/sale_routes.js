const router = require('express').Router();

const { getAllSales } = require('../../controllers/sale_controller');

router.route('/')
  .get(getAllSales);

module.exports = router;