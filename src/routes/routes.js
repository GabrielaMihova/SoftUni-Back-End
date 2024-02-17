const router = require("express").Router();
const movieService = require("../services/movieService");

router.get("/", (req, res) => {
  const movies = movieService.getAll();
  res.render("home", { movies, layout: false });
});

module.exports = router;

router.get("/details", (req, res) => {
  const movieData = {
    id: req.query.id,
    title: req.query.title,
    genre: req.query.genre,
    director: req.query.director,
    date: req.query.date,
    imageUrl: req.query.imageUrl,
    rating: req.query.rating,
    description: req.query.description
  };
  
  res.render("details", { layout: false, movieData: movieData });
});

router.get("/about", (req, res) => {
  res.render("about", { layout: false });
});

router.get("/create", (req, res) => {
  res.render("create", { layout: false });
});

router.post("/create", async (req, res) => {
  try {
    const newMovie = req.body;
    await movieService.create(newMovie);
    res.redirect("/");
  } catch (error) {
    console.error("Error creating movie:", error);
    res.status(500).send("An error occurred while creating the movie.");
  }
});

router.get("*", (req, res) => {
  res.render("404", { layout: false });
});

module.exports = router;
