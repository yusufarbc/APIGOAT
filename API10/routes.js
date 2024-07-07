const express = require('express');
const router = express.Router();
const path = require('path');
const https = require('https');

router.get('/', (req, res, next) => {
    res.status(404);
    res.json({
        message:"API10 is working"
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
    const location = req.query.location;
    console.log(location);  
    // No validation on user-provided location!
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2ee846af58955a6f94b6ed6b16fdb176`;
    https.get(url, (response) => {
      let weatherData = '';
      response.on('data', (chunk) => {
        weatherData += chunk;
      });
      response.on('end', () => {
        res.send(weatherData);
      });
    }).on('error', (error) => {
      console.error('Error fetching weather data:', error);
      res.status(500).send('Internal server error');
    });
});


module.exports = router;