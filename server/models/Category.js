const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
  }
}, {
  timestamps: true
});

const Category = model('Category', categorySchema);

module.exports = Category;