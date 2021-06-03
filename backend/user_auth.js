const express = require("express");
const mongoose = require("mongoose");
const route = express.Router();
const userSchema = require("./db/model/userSchema")
const notesSchema = require("./db/model/notesSchema")

express().use(express.urlencoded({ extended: true }))

require("./db/conn.js")
const user = mongoose.model("users", userSchema);
const notes = mongoose.model("notes", notesSchema)

const sign_up_isThere = (req, res, next) => {
    user.findOne({user_email_id: req.body.user_email_id}, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            if(result) {
                next()
            } else {
                res.status(409).end();
            }
        }
    })
}

route.get("/islogedin", (req, res) => {
    
});

route.post("/log-in", (req, res) => {
    user.findOne({ user_email_id: req.body.user_email_id }
        , (err, result) => {
            if(err) {
                console.log(err);
            } else {
                if(result.user_pass === req.body.user_pass) {
                    notes.find({ user: result.user_email_id }, (err, result) => {
                        if(err) {
                            console.log(err);
                        } else {
                            res.send(result);
                            res.end();
                        }
                    })
                }
            }
        })
});

route.post("/sign-up", sign_up_isThere, (req, res) => {
    const new_user = new user({
        user_name: req.body.user_name,
        user_email_id: req.body.user_email_id,
        user_pass: req.body.user_pass,
    });

    new_user.save((err, result) => {
        if(err) {
            console.log(err);
        } else {
            console.log("user added");
        }
    })
});

module.exports = route;