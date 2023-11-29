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
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator(val) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi.test(val)
      },
      message() {
        return 'You must enter a valid email address.'
      }
    }
  },
}, {
  timestamps: true,
  collection: 'company'
});

const Company = model('Company', companySchema);

module.exports = Company;