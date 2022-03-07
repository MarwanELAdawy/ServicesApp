const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({

    CustomerName: {
        type: String,
        required: true,
    },  
    CustomerEmail: {
        type: String,
        required: true,
    },
    CustomerPhone: {
        type: Number,
        required: true,
    },
    Customersegment: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Customer',CustomerSchema);