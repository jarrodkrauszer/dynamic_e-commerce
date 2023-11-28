const Company = require('../models/Company');

module.exports = {
  async getCompanyInfo(req, res) {
    try {
      const company = await Company.find();

      res.status(200).json(company);

    } catch (err) {
      console.log(err.message);
      res.status(500).json(err.message);
    }
  }
}