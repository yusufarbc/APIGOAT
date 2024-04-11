//Server Side Request Forgery
const express = require('express');
const router = express.Router();
const path = require('path');
const api7 = require('../controllers/API7');

router.get('/', (req, res, next) => {
    res.status(404);
    res.sendFile(path.join(__dirname, '../', 'views', 'API7.html'))  
});

module.exports = router;
