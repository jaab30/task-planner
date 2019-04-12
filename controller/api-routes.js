var toDoItem = require("../models/todolist.js");
var express = require("express");

var router = express.Router();

router.get("/", function (req, res) {
    toDoItem.findAll({})
        .then(function (fromDB) {
            console.log(fromDB)
            // res.json(fromDB)
            var toDoDisplay = {
                item: fromDB
            }
            res.render("index", toDoDisplay);
        })
})
router.get("/view/:id", function (req, res) {
    console.log(req.params.id)
    toDoItem.findAll({
        where: {
            id: req.params.id
        }
    })
        .then(function (fromDB) {

            res.json(fromDB);
        })
})

router.post("/additem", function (req, res) {
    console.log(req.body)
    toDoItem.create({
        item: req.body.itemText,
        to_be_completed_by: req.body.completeBy,
        details: req.body.moreDetails
    })
        .then(function () {
            res.end()
        })

})

router.put("/checkItem/:id", function (req, res) {
    toDoItem.update({
        completed: req.body.completed
    }, {
            where: {
                id: req.params.id
            }
        }).then(function () {
            res.end()
        })

})

router.delete("/deleteItem/:id", function (req, res) {
    toDoItem.destroy({
        where: {
            id: req.params.id
        }
    }).then(function () {
        res.end()
    })

})






module.exports = router
