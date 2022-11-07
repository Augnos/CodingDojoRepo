const Joke = require("../models/joke.model");

module.exports.findAllJokes = (req, res) => {
  Joke.find()
    .then(allDaJokes => res.json({ jokes: allDaJokes }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findRandom = (req, res) => {
  Joke.find()
    .then(joke => {res.json(joke[Math.floor(Math.random() * joke.length)])})
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneJokeId = (req, res) => {
  Joke.findById({ _id: req.params._id })
    .then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true })
    .then(updatedJoke => res.json({ joke: updatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params._id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
