const express = require('express');
const router = express.Router();
const path = require('path');
const mongoose = require('mongoose');

const Book = require('./book');
const installer = require('./middlewares/installer');
const checkAuth = require('./middlewares/check-auth');

router.get('/', installer, (req, res, next) => {
    res.status(200);
    res.json({
        message:"API5 is working"
    });
});

  

  router.get('/books', (req, res, next) => {
    Book
        .find()
        .select('name author')
        .exec()
        .then(result=>{
            console.log(result);
            if (result.length >= 0){
                res.status(200).json({
                    count: result.length,
                    books: result
                });
            } else {
                res.status(404).json({
                    
                    message: 'No entires found'
                })
            } 
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error:err
            });
        });
});

router.post('/books', checkAuth,  (req, res, next) => {
    console.log("request to product")
    const book = new Book({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        author: req.body.author
    });
    book
        .save()
        .then(result => {
        //success call back
        console.log(result);
        res.status(201).json({
            message: 'book successfully created',
            creadtedProduct: result
        });
        })
        //error call back
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error:err
            })
        });
});

router.get('/books/:bookId', (req, res, next) => {
    console.log("get product request")
    const id = req.params.productId;
    Book.findById(id)
        .exec()
        .then(doc => {
            console.log(doc);
            if (doc) {
               res.status(200).json({doc}); 
            } else {
                res.status(404).json({message: 'No valid entry found for provided id'});
            }
            
        })
        .catch( err => {
            console.log(err);
            res.status(500).json({error:err});
        });
});

router.patch('/books/:bookId', (req, res, next) => {
    console.log("patch book request")
    const id = req.params.bookId;
    const updateOps = {};
    for (const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Product.updateOne({ _id:id }, { $set: updateOps})
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json({result})
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
});



module.exports = router;