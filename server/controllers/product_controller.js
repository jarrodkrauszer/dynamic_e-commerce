const Product = require('../models/Product');

module.exports = {
  async getAllProducts(req, res) {
    try {
      const products = await Product.find();

      res.status(200).json(products)
    } catch (err) {
      console.log(err.message);
      res.status(500).json(err.message)
    }
  }
}