var express = require("express");
var router = express.Router();
var controller = require("../controller/controller")

router.route("/").get(controller.findAll);

module.exports = router;