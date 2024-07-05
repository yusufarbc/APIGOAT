const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{ type: String, required: true},
    email:{ type: String, required: true, unique: true },
    password: { type: String, required: true}
});


module.exports = mongoose.model('Account2', accountSchema);