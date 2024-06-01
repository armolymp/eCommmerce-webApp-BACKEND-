const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  sku: { type: String, required: true },
  quantity: { type: Number, required: true },
  name: { type: String, required: true },
  images: { type: [String], required: true },
  description: { type: String, required: true },
  featuredImage: { type: String, required: true },
});

module.exports = mongoose.model('Product', productSchema);
