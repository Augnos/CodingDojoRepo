const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, "A setup is required"],
            minlength: [10, "The setup must be at least 10 characters long"]
        },
        punchline: {
            type: String,
            required: [true, "A punchline is required"],
            minlength: [3, "The punchline must be at least 3 characters long"]
        }
    },
    { timestamps: true }
);

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;