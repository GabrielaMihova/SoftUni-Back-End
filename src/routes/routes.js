// 1st way
const express = require("express");
const router = express.Router();

// 2nd way - const express = require("express").Router();

router.get("/", (req, res) => {
  res.render("home", { layout: false });
});

router.get("/about", (req, res) => {
  res.render("about", { layout: false });
});

router.get("/create", (req, res) => {
  res.render("create", { layout: false });
});

module.exports = router;
