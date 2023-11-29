const Sale = require('../models/Sale');

module.exports = {
  async getAllSales(req, res) {
    try {
      const sales = await Sale.find();

      res.status(200).json(sales);

    } catch (err) {
      console.log(err.message);
      res.status(500).json(err.message);
    }
  }
};