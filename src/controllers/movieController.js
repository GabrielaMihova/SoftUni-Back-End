const router = require("express").Router();

router.get("/create", (req, res) => {
  res.render("create");
});

router.post("/create", (req, res) => {
  console.log(req.body);
  res.send("Movie should be created");
});

module.exports = router;
