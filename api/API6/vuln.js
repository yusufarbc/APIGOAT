const express = require('express');
const bodyParser = require('body-parser'); // for parsing request body

const app = express();
app.use(bodyParser.json()); // parse incoming JSON data

// Simulate flight data (replace with actual database interaction)
let flights = [
  { id: 1, destination: 'Paris', seatsAvailable: 100 },
  { id: 2, destination: 'London', seatsAvailable: 50 },
];

// Vulnerable booking endpoint (Unrestricted Access)
app.post('/bookings', (req, res) => {
  const { flightId, numOfSeats } = req.body;

  // No checks on user identity or booking limits!
  const flight = flights.find((f) => f.id === flightId);
  if (!flight) {
    return res.status(404).send('Flight not found');
  }

  if (flight.seatsAvailable >= numOfSeats) {
    flight.seatsAvailable -= numOfSeats;
    res.status(201).send('Booking successful');
  } else {
    res.status(400).send('Insufficient seats available');
  }
});

app.listen(3000, () => console.log('Server listening on port 3000'));
