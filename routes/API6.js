//Unrestricted Access to Sensitive Business Flows
const express = require('express');
const router = express.Router();
const path = require('path');
const api6 = require('../controllers/API6');

router.get('/', (req, res, next) => {
    res.status(404);
    res.sendFile(path.join(__dirname, '../', 'views', 'API6.html'))  
});

module.exports = router;
