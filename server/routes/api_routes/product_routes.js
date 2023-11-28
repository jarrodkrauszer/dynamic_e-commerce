const router = require('express').Router();
const { authenticate } = require('../../controllers/helpers');

const {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProductById,
  updateProductById }
  = require('../../controllers/product_controller');

router.route('/:id')
  .delete(authenticate, deleteProductById)
  .put(authenticate, updateProductById)
  .get(authenticate, getProductById)

router.route('/')
  .post(authenticate, createProduct)
  .get(authenticate, getAllProducts);

module.exports = router;