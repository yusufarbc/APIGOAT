const axios = require('axios');

let flights = [
    { "id": "1", "destination": "Paris", "seatsAvailable": 100 },
    { "id": "2", "destination": "London", "seatsAvailable": 50 },
    { "id": "3", "destination": "Istanbul", "seatsAvailable": 40 },
];

let bookings = [
    {"flightId":"1", "numOfSeats":2},
    {"flightId":"2", "numOfSeats":4},
    {"flightId":"1", "numOfSeats":5},
];

module.exports = (req, res, next) => {
    try {
        flights.forEach(element => {
            axios
            .post('http://localhost:'+String(process.env.PORT_API6)+'/flights', element)
            .then(res => {
                console.log("element ceated");
            })
            .catch(err => {
              console.log(err);
            });
        });
        
        bookings.forEach(element => {
            axios
            .post('http://localhost:'+String(process.env.PORT_API6)+'/bookings', element)
            .then(res => {
                console.log("element ceated");
            })
            .catch(err => {
              console.log(err);
            });
        });

    } catch (error) {
        console.log("already installed");
        console.log(error)
    }
    
    return next();
}