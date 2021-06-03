const mongoose = require("mongoose");

const notesSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    note: {
        type: String,
        require: true
    },
    user: {
        type: String,
        require: true
    },
    date_created: {
        type: Date,
        default: Date.now
    }
})

module.exports = notesSchema;