const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({

    ServiceName: {
        type: String,
        required: true,
    },  
    ServiceRequirements: {
        type: String,
        required: true,
    },
    ServiceFees: {
        type: Number,
        required: true,
    },
    ServiceActive: {
        type: Boolean,
        required: true,
    }
});

module.exports = mongoose.model('Service',ServiceSchema);