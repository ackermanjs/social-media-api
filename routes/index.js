const router = require("express").Router();

// router.use

router.get("/", (req, res) => {
  res.json({ status: "success" });
});

module.exports = router;
