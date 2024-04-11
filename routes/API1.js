//Broken Object Level Authorization
const express = require('express');
const router = express.Router();
const path = require('path');
const api1 = require('../controllers/API1');

router.get('/', (req, res, next) => {
    res.status(404);
    res.sendFile(path.join(__dirname, '../', 'views' ,'API1.html'))  
});

module.exports = router;