const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const upload = require('../middleware/upload');
const Product = require('../models/Product'); 

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProduct);
router.post('/', upload.fields([{ name: 'featuredImage', maxCount: 1 }, { name: 'images', maxCount: 5 }]), async (req, res) => {
  const { sku, quantity, name, description } = req.body;
  const featuredImage = req.files['featuredImage'][0].path;
  const images = req.files['images'].map(file => file.path);

  try {
    const newProduct = new Product({
      sku,
      quantity,
      name,
      description,
      featuredImage,
      images
    });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.put('/:id', upload.fields([{ name: 'featuredImage', maxCount: 1 }, { name: 'images', maxCount: 5 }]), async (req, res) => {
  try {
    let imagePaths = [];
    if (req.files) {
      imagePaths = Object.values(req.files).map(fileArray => fileArray.map(file => file.path)).flat();
    }

    const { sku, quantity, name, description, featuredImage } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { sku, quantity, name, images: imagePaths, description, featuredImage },
      { new: true }
    );


    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(updatedProduct);
  } catch (err) {
    // Handle errors
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', productController.deleteProduct);

module.exports = router;
