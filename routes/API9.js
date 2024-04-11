//Improper Inventory Management
const express = require('express');
const router = express.Router();
const path = require('path');
const api9 = require('../controllers/API9');

router.get('/', (req, res, next) => {
    res.status(404);
    res.sendFile(path.join(__dirname, '../', 'views', 'API9.html'))  
});

module.exports = router;
