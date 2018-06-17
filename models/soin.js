
const mongoose = require('../config/service');
const prestationSchema = mongoose.Schema({
    temp: {
        type: Number,
        required: true
    },
    prix: {
        type: Number,
        required: true
    }

});
const soinSchema = mongoose.Schema({
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
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    prestation: [prestationSchema]
});

module.exports = mongoose.model('Soin', soinSchema);