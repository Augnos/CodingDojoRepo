const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
}, { timestamps: true });

module.exports.User = mongoose.model("User", UserSchema);
