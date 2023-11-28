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
  },

  async getProductById(req, res) {
    try {
      const product = await Product.findById(req.params.id).populate("category");

      res.status(200).json(product);
    } catch (err) {
      console.log(err.message);
      res.status(500).json(err.message)
    }
  },

  async createProduct(req, res) {
    try {
      const product = await Product.create(req.body);

      res.status(200).json(product);
    } catch (err) {
      console.log(err.message);
      res.status(500).json(err.message)
    }
  },

  async deleteProductById(req, res) {
    try {
      await Product.deleteOne({ _id: req.params.id });

      res.status(200).json({
        message: 'Product deleted successfully!'
      });

    } catch (err) {
      console.log(err.message);
      res.status(500).json(err.message);
    }
  },

  async updateProductById(req, res) {
    try {
      console.log('User: ', req.user._id)
      const product = await Product.findByIdAndUpdate({
        _id: req.params.id
      }, req.body,
        { new: true });

      res.status(200).json(product);
    } catch (err) {
      console.log(err.message);
      res.status(500).json(err.message);
    }
  }
}