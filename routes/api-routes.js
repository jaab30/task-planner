var express = require("express");
var router = express.Router();
var controller = require("../controller/controller");

router.route("/view/:id").get(controller.viewItem);
router.route("/additem").post(controller.addItem);
router.route("/checkItem/:id").put(controller.checkItem);
router.route("/updateItem/:id").put(controller.updateItem);
router.route("/deleteItem/:id").delete(controller.deleteItem);

module.exports = router;


