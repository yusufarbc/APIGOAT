const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    flightID: {type: Number, required: true},
    numOfseat: {type: Number, required: true},
});

module.exports = mongoose.model('Bookings', bookingSchema);