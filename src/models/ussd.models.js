const { model, Schema } = require('mongoose');

const ussdSchema = new Schema({
    serialNumber: {
        type: Number,
        required: true
    },candidate: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
        trim: true
    },
    vote: {
        type: Number,
        required: true,
        default: 0
    },
});

module.exports = model("ussd", ussdSchema);