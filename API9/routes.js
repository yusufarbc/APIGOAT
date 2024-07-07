const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
    res.status(404);
    res.json({
        message:"working"
    });
});

// Simulate an undocumented API endpoint (unknown purpose and functionality)
router.get('/unknown', (req, res) => {
    // Placeholder for potentially sensitive data or functionalities (unknown due to lack of documentation)
    res.send({ message: 'This is an undocumented API endpoint' });
});

module.exports = router;