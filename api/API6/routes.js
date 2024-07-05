const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
    res.status(404);
    res.json({
        message: "API6 is working"
    });
});


// Simulate flight data (replace with actual database interaction)
let flights = [
    { "id": "1", "destination": "Paris", "seatsAvailable": 100 },
    { "id": "2", "destination": "London", "seatsAvailable": 50 },
];

let bookings = [
    {"id":"1", "flightId":"1", "numOfseats:":2},
];

router.get("/flights", (re, res, next) => {
    res.status(200).json(flights);
});

// Vulnerable booking endpoint (Unrestricted Access)
router.get("/bookings", (re, res, next) => {
    res.status(200).json(bookings);
});


// Vulnerable booking endpoint (Unrestricted Access)
router.post('/bookings', (req, res, next) => {
    const flightId = req.body.flightId;
    const numOfSeats = req.body.numOfSeats;
    
    const result = flights.filter((flight) =>
        flight.id.includes(flightId)
    );
    
    if (result.length != 1) {
        return res.status(404).send('Flight not found');
    }

    if ( numOfSeats <= (result[0].seatsAvailable) ) {
        result[0].seatsAvailable = ((result[0].seatsAvailable) - numOfSeats);
        console.log("if çalıştı")

        bookingId = bookings.length + 1;
        bookings.push({
            id: bookingId,
            flightId: flightId,
            numOfSeats: numOfSeats
        });
        res.status(201).send('Booking successful');
    } else {
        res.status(400).send('Insufficient seats available');
    }
});


// Vulnerable booking endpoint (Unrestricted Access)
router.patch('/bookings/:bookingId', (req, res, next) => {
    const { flightId, numOfSeats } = req.body;

    const bookingId = req.params.bookingId;
    const results = bookings.filter((booking) =>
        booking.id.includes(bookingId)
    );


    if (!results) {
        return res.status(404).send('Boooking not found');
    }

    // No checks on user identity or booking limits!
    const flight = flights.filter((flight) =>
        flight.id.includes(flightId)
    );
    if (flight.length != 1) {
        return res.status(404).send('Flight not found');
    }

    // No checks on user identity or booking limits!
    if (flight[0].seatsAvailable >= numOfSeats) {
        flight[0].seatsAvailable -= numOfSeats;
        results[0].numOfseats= numOfSeats;
        res.status(201).send('Booking successful');
    } else {
        res.status(400).send('Insufficient seats available');
    }
});

module.exports = router;