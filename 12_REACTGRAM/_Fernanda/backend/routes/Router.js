const express = require("express");
const router = express();

router.use("/api/users", require("./UserRoutes"));
router.use("/api/photos", require("./PhotoRoutes"));

// teste
router.get("/", (req, res) => {
  res.send("api working");
})

module.exports = router;