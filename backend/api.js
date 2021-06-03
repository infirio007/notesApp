const express = require("express");
const app = express();
const mongoose = require("mongoose")
const notesSchema = require("./db/model/notesSchema")
const user_route = require("./user_auth.js")

app.use(express.urlencoded({ extended: true }))
app.use("/user", user_route)

require("./db/conn.js")
const notes = mongoose.model("notes", notesSchema)

app.get("/notes/:id", (req, res) => {
    notes.findById(req.params.id, (err, data) => {
        if(err) {
            console.log(err);
        } else {
            console.log("data got");
        }
    })
})

app.get("/notes", (req, res) => {
    notes.find((err, data) => {
        if(err) {
            console.log(err);
        } else {
            console.log("all data got");
        }
    })
})

app.post("/notes", (req, res) => {
    const notes_new = new notes({
        title: req.body.title,
        note: req.body.note,
        user: req.body.user_email
    })

    notes_new.save((err, result) => {
        if(err) {
            console.log(err);
        } else {
            console.log("saved data");
        }
    })
})

app.post("/notes-change", (req, res) => {
    notes.updateOne({_id: req.body.id},
        { title: req.body.title, note: req.body.note, user: req.body.user }
        , (err, res) => {
        if(err) {
            console.log(err);
        } else {
            console.log("data changed");
        }
    })
})

app.post("/notes-delete", (req, res) => {
    notes.deleteOne({_id: req.body.id}, err => {
        if(err) {
            console.log(err);
        } else {
            console.log("deletion completion");
        }
    })
})

app.listen(4000, () => {
    console.log("server running at port 4000");
})