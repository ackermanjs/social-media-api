const router = require("express").Router();
const apiRoutes = require("./api");
// router.use

router.use("/api", apiRoutes);
router.use((req, res) => {
  return res.send("Check your routes!")
})
module.exports = router;
