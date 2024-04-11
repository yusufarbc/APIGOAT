//Broken Function Level Authorization
const express = require('express');
const router = express.Router();
const path = require('path');
const api5 = require('../controllers/API5');

router.get('/', (req, res, next) => {
    res.status(404);
    res.sendFile(path.join(__dirname, '../', 'views', 'API5.html'))  
});

module.exports = router;
