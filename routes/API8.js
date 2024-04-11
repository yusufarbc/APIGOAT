//Security Misconfiguration
const express = require('express');
const router = express.Router();
const path = require('path');
const api8 = require('../controllers/API8');

router.get('/', (req, res, next) => {
    res.status(404);
    res.sendFile(path.join(__dirname, '../', 'views', 'API8.html'))  
});

module.exports = router;
