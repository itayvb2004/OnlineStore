const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/OnlineStoreDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/products', async (req, res) => {
  try {
    const products = await Product.find(); 
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
