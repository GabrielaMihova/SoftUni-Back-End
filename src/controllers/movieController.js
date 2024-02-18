const router = require("express").Router();

const movieService = require("../services/movieService");

router.get("/create", (req, res) => {
  res.render("create");
});

router.post("/create", (req, res) => {
  const newMovie = req.body;
  movieService.create(newMovie);

  newMovie.ratingStars = "&#x2605;".repeat(Number(newMovie.rating));

  console.log("New movie with ratingStars:", newMovie);

  res.redirect("/");
});

module.exports = router;
