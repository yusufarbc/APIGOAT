const mongoose = require('mongoose');

const flightSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    number: {type: Number, required: true, unique: true},
    destination: {type: String, required: true},
    seatsAvailable: {type: Number, required: true}
});

module.exports = mongoose.model('flights', flightSchema);