const mongoose = require('mongoose');

const productShema = mongoose.Schema({
    username: { type: String, required: true, unique: true},
    name: {type: String, required: true},
    email:{type:String, required:true},
    number:{type:Number, unique: true, required: true}
});

module.exports = mongoose.model('Profile8', productShema);