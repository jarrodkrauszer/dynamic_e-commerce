const { Schema, model } = require('mongoose');

const saleSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
}, {
  timestamps: true
});

const Sale = model('Sale', saleSchema);

module.exports = Sale;