const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
    res.status(404);
    res.json({
        message:"working"
    });
});

// Simulate a product database (replace with actual database interaction)
const products = [
    { id: 1, name: 'Product 1', description: 'A short description' },
    { id: 2, name: 'Product 2', description: 'Another short description' },
    // ... potentially many more products
  ];
  
// Vulnerable search endpoint (Unrestricted Resource Consumption)
router.get('/products', (req, res) => {
    const searchQuery = req.query.search || ''; // Allow any search query
  
    // Return all matching products without any limits
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    res.send(results);
});

module.exports = router;