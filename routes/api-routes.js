const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");

router.get("/view/:id", controller.viewItem);
router.post("/additem", controller.addItem);
router.put("/checkItem/:id", controller.checkItem);
router.put("/updateItem/:id", controller.updateItem);
router.delete("/deleteItem/:id", controller.deleteItem);

module.exports = router;


