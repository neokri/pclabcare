const mongoose = require('mongoose');

var Product = mongoose.model('Product', {
    pname: { type: String },
    pmodel: { type: String },
    price: { type: Number }
});

module.exports = { Product };