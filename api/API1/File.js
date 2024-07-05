const mongoose = require('mongoose');

const filesSchema = mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
    number: {type: Number, required: true},
    name: {type: String, required: true},
    content: { type: String, required: true },
    path: { type: String, required: true }
});

module.exports = mongoose.model('File', filesSchema);