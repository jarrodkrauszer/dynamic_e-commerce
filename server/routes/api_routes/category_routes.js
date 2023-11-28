const router = require('express').Router();
const { authenticate } = require('../../controllers/helpers');

const { getAllCategories, getCategoryById, createCategory, deleteCategoryById, updateCategoryById } = require('../../controllers/category_controller');

router.route('/:id')
  .delete(authenticate, deleteCategoryById)
  .put(authenticate, updateCategoryById)
  .get(authenticate, getCategoryById);

router.route('/')
  .get(authenticate, getAllCategories)
  .post(authenticate, createCategory);

module.exports = router;