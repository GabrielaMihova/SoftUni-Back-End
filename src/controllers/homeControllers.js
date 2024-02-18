const express = require("express");
const router = express.Router();
const movieService = require("../services/movieService");

router.get("/create", (req, res) => {
  res.render("create");
});

router.get("/search", (req, res) => {
  const movies = movieService.getAll();
  console.log("All movies:", movies);
  res.render("search", { movies });
});

router.post("/create", (req, res) => {
  const newMovie = req.body;
  console.log(req.body);
  movieService.create(newMovie);
  res.redirect("/");
});

module.exports = router;
