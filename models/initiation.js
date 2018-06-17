const mongoose = require('../config/service');
const prestationSchema = mongoose.Schema({
    prix: {
        type: Number,
        required: true
    },
    describe: {
        type: String,
        required: true
    }
});

const initiationSchema = mongoose.Schema({
    alias: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    presation: [prestationSchema]
});

module.exports = mongoose.model('Initiation', ) 