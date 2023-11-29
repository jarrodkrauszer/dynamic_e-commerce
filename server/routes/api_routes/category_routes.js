const router = require('express').Router();
const { isAuthenticate } = require('../../controllers/helpers');

const { getAllCategories, getCategoryById, createCategory, deleteCategoryById, updateCategoryById } = require('../../controllers/category_controller');

router.route('/:id')
  .delete(isAuthenticate, deleteCategoryById)
  .put(isAuthenticate, updateCategoryById)
  .get(isAuthenticate, getCategoryById);

router.route('/')
  .get(getAllCategories)
  .post(isAuthenticate, createCategory);

module.exports = router;