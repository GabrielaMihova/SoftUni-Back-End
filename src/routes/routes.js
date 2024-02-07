// 1st way
const express = require("express");
const router = express.Router();

// 2nd way - const express = require("express").Router();

router.get("/", (req, res) => {
  res.render("home", { layout: false });
});

module.exports = router;
