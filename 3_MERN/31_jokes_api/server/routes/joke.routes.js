const JokeController = require("../controllers/joke.controller");

module.exports = app => {
  app.get("/api/jokes/", JokeController.findAllJokes);
  app.get("/api/jokes/random", JokeController.findRandom);
  app.get("/api/jokes/:_id", JokeController.findOneJokeId);
  app.post("/api/jokes/new", JokeController.createNewJoke);
  app.put("/api/jokes/update/:_id", JokeController.updateExistingJoke);
  app.delete("/api/jokes/delete/:_id", JokeController.deleteAnExistingJoke);
};
