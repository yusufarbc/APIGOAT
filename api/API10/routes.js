const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
    res.status(200);
    res.json({
        message:"working"
    });
});

// Simulate weather data (replace with actual API interaction)
let weatherData = {
    location: 'New York',
    temperature: 20,
    description: 'Sunny',
  };
  
  // Vulnerable endpoint (no data validation or sanitization)
router.get('/weather', (req, res) => {
    res.send(weatherData);
});

module.exports = router;