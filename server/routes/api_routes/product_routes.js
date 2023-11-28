const router = require('express').Router();
const { isAuthenticate } = require('../../controllers/helpers');

const {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProductById,
  updateProductById }
  = require('../../controllers/product_controller');

router.route('/:id')
  .delete(isAuthenticate, deleteProductById)
  .put(isAuthenticate, updateProductById)
  .get(isAuthenticate, getProductById)

router.route('/')
  .post(isAuthenticate, createProduct)
  .get(isAuthenticate, getAllProducts);

module.exports = router;