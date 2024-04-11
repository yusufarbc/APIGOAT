//Broken Authentication
const express = require('express');
const router = express.Router();
const path = require('path');
const api2 = require('../controllers/API2');

router.get('/', (req, res, next) => {
    res.status(404);
    res.sendFile(path.join(__dirname, '../', 'views', 'API2.html'))  
});

module.exports = router;