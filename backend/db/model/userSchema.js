const mongoose = require("mongoose");

const notesSchema = mongoose.Schema({
    user_name: {
        type: String,
        require: true 
    },
    user_email_id: {
        type: String,
        require: true
    },
    user_pass: {
        type: String,
        require: true 
    }
})

module.exports = notesSchema;