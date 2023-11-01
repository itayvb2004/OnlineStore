const mongoose = require('mongoose');

const Product = mongoose.model('Product', {
  _id: ObjectId,
  id: String,
  name: String,
  category: String,
  producer: String,
  description: String,
  price: Number,
  inventory: Number,
  imageUrl: String,
});

module.exports = Product;
