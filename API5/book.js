const mongoose = require('mongoose');

const productShema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true},
    author: { type: String, required: true }
});

module.exports = mongoose.model('Book5', productShema);