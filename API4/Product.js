const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
    number: {type: String, required: true},
    name: {type: String, required: true},
    description: { type: String, required: true },
    details: { type: String, required: true },
});

module.exports = mongoose.model('Product4', productSchema);