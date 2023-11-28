const router = require('express').Router();

const { register, login, logout, authenticate } = require('../../controllers/user_controller');

router.route('/register')
  .post(register);

router.route('/login')
  .post(login);

router.route('/logout')
  .get(logout);

router.route('/authenticate')
  .get(authenticate);

module.exports = router;