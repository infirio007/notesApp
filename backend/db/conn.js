const mongoose = require("mongoose");

const db = "mongodb+srv://infirio3566:infirio3566@cluster0.nbmqq.mongodb.net/notesApp?retryWrites=true&w=majority";

mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true }, err => {
    if(err) {
        console.log(err);
    } else {
        console.log("connection successful")
    }
})