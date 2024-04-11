//Unrestricted Resource Consumption
const express = require('express');
const router = express.Router();
const path = require('path');
const api4 = require('../controllers/API4');

router.get('/', (req, res, next) => {
    res.status(404);
    res.sendFile(path.join(__dirname, '../', 'views', 'API4.html'))  
});

module.exports = router;
