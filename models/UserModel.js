const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    fullname: {
        type : String,
        minLength: 3,
        trim : true
    },
    email: String,
    password: String,
    isAdmin: Boolean,
    orders: {
        type: Array,
        default: []
    },
    contact: number,
    cart: {
        type: Array,
        default: []
    },
    picture: String
});

module.exports = mongoose.model("user", UserSchema);
