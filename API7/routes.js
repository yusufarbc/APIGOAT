const express = require('express');
const router = express.Router();
const path = require('path');
const https = require('https');

router.get('/', (req, res, next) => {
    res.status(200);
    res.json({
        message: "API7 is working"
    });
});

// Vulnerable API endpoint (SSRF vulnerability)
router.get('/weather', (req, res) => {
    const location = req.query.location;
  
    // No validation on user-provided location!
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=`+String(process.env.OPENWEATHER_API_KEY);
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