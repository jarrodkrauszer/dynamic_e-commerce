const router = require('express').Router();

const { getCompanyInfo } = require('../../controllers/company_controller');

router.route('/')
  .get(getCompanyInfo);

module.exports = router;