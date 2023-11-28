const { User } = require('../models');
const { verify } = require('jsonwebtoken');

const { createToken } = require('./helpers');

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);

      const token = await createToken(user._id);

      res.cookie('token', token, {
        maxAge: 60 * 60 * 1000,     // 1 hour
        httpOnly: true,
        secure: process.env.PORT ? true : false
      });

      res.json(user)

    } catch (err) {
      let message;

      if (err.code === 11000) {
        message = 'That email address is already in use.'
      } else {
        message = err.message;
      }

      console.log(err.message);
      res.status(403).json({
        code: err.code,
        message
      })
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email }).populate('orders');

      if (!user) return res.status(403).json({
        message: 'User with that email address not found.'
      });

      const pass_is_valid = await user.validatePass(password);

      if (!pass_is_valid) return res.status(403).json({
        message: 'Password is invalid.'
      })

      const token = await createToken(user._id);

      res.cookie('token', token, {
        maxAge: 60 * 60 * 1000,
        httpOnly: true
      })

      res.json(user)

    } catch (err) {
      console.log('There was an issue while logging in.')
      res.status(500).json({
        message: 'Was not able to log user in.'
      })
    }
  },

  async logout(req, res) {
    res.clearCookie('token');

    res.json({
      message: 'Logged out successfully!'
    })
  },

  async authenticate(req, res) {
    console.log('Authenticate!', req.cookies.token)
    const token = req.cookies.token;

    if (!token) return res.status(500).json({ user: null });

    try {
      const data = await verify(token, process.env.JWT_SECRET, {
        maxAge: '1hr'
      });

      const user = await User.findById(data.user_id);

      res.status(200).json({ user });

    } catch (err) {
      console.log(err.message);
      res.status(401).json({
        user: null
      })
    }
  }
}