const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vendorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    products: [{
        title: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        imageUrl: {
            type: String,
            required: true
        },
        description: String
    }]
});

module.exports = mongoose.model('Vendor', vendorSchema);