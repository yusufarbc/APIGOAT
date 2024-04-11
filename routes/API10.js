//Unsafe Consumption of APIs
const express = require('express');
const router = express.Router();
const path = require('path');
const api10 = require('../controllers/API10');

router.get('/', (req, res, next) => {
    res.status(404);
    res.sendFile(path.join(__dirname, '../', 'views', 'API10.html'))  
});

module.exports = router;
