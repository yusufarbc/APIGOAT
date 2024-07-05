const mongoose = require('mongoose');

const flagSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    number:{type: Number, required: true},
    name:{ type: String, required: true},
});


module.exports = mongoose.model('Flags', flagSchema);