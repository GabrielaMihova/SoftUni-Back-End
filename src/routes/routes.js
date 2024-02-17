const router = require("express").Router();
const movieService = require("../services/movieService");

router.get("/", (req, res) => {
  const movies = movieService.getAll();
  res.render("home", { movies, layout: false });
});

module.exports = router;

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
