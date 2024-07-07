const express = require('express');
const router = express.Router();
const path = require('path');
const Product = require('./Product');
const installer = require('./installer');
const mongoose = require('mongoose');

router.get('/', installer, (req, res, next) => {
    res.status(200);
    res.json({
        message:"API4 is working"
    });
});

// Vulnerable search endpoint (Unrestricted Resource Consumption)
router.get('/products', (req, res, next) => {
    let searchQuery = req.query.search || ' '; // Allow any search query
    // Return all matching products without any limits
    Product.find({name:searchQuery,description:searchQuery, details:searchQuery})
    .exec()
    .then( result => {
      return res.status(200).json({result:result})
    })
    .catch( (err=>{
      return res.status(500).json({err:err});
    }));
});

// Products endpoint: gets a product
router.get('/products/:productId', (req, res, next) => {
    const productId = req.params.productId;
    Product.findOne({
      number:productId
    })
    .exec()
    .then( product =>{
      return res.status(200).json({
        product: product
      })
    })
    .catch( err=>{
      return res.status(500).json({
        err:err
      })
    });
});

// Products endpoint: post request creates a product
router.post('/products',  (req, res, next) => {
  const product = new Product({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      description: req.body.description,
      details: req.body.details,
      number: req.body.id
  });
  product
      .save()
      .then(result => {
      //success call back
      console.log(result);
      return res.status(201).json({
          message: 'product successfully created',
          creadtedProduct: result
      });
      })
      //error call back
      .catch(err => {
          console.log(err);
          return res.status(500).json({
              error:err
          })
      });
});

module.exports = router;