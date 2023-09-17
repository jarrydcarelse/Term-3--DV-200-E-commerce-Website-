const mongoose = require('mongoose');

const MusicSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Stock: {
        type: Number,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("Music", MusicSchema);