const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productname: String,
    image: String,
    quantity: Number,
    price: Number,
    disc_price: {
        type: Number,
        default: 0
    },
    bgcolor: String,
    panelcolor: String,
    textcolor: String
});

module.exports = mongoose.model('product', productSchema);
