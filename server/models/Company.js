const { Schema, model } = require('mongoose');

const companySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true
  },
  address: {
    street: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    postalCode: {
      type: String,
      required: true
    }
  },
  phone: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  collection: 'company'
});

const Company = model('Company', companySchema);

module.exports = Company;