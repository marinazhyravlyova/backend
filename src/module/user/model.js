const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
    name: {type: String, default: "untitled user"},
    email: {type: String, default: "untitled user email"},
    password: {type: String, default: "untitled user"},
    token: {type: String },

    gender: {type: String, default: "untitled user gender"},
    age: {type: String, default: "untitled user age"},
    height: {type: String, default: "untitled user height"},
    weight: {type: String, default: "untitled user weight"},
}, { toJSON: { virtuals: true } });

const User = mongoose.model('User', UserSchema);

module.exports = User;
