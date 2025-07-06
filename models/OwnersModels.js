const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    fullname: {
        type: String,
        minLength: 3,
        trim: true
    },
    pitcure: String,
    email: String,
    password : String,
    products: {
        type: Array,
        default: [],    
    },
    gstno : String
});

module.exports = mongoose.model('owner', ownerSchema);