//Broken Object Property Level Authorization
const express = require('express');
const router = express.Router();
const path = require('path');
const api3 = require('../controllers/API3');

router.get('/', (req, res, next) => {
    res.status(404);
    res.sendFile(path.join(__dirname, '../' ,'views', 'API3.html'))  
});

module.exports = router;