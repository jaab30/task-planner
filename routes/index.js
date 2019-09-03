var express = require("express");
var router = express.Router();
var apiRoutes = require("./api-routes");
var htmlRoutes = require("./html-routes");


router.use("/", htmlRoutes);
router.use("/api", apiRoutes);

module.exports = router;

