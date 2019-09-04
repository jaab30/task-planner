// var toDoItem = require("../models/todolist.js");
var db = require("../models")

module.exports = {
    findAll: function (req, res) {
        console.log(db.todoitem)
        db.todoitem.findAll({})
            .then(function (fromDB) {
                var toDoDisplay = {
                    item: fromDB
                }
                res.render("index", toDoDisplay);
            })
    },
    viewItem: function (req, res) {
        db.todoitem.findAll({
            where: {
                id: req.params.id
            }
        })
            .then(function (fromDB) {
                res.json(fromDB);
            })
    },
    addItem: function (req, res) {
        db.todoitem.create({
            item: req.body.itemText,
            to_be_completed_by: req.body.completeBy,
            details: req.body.moreDetails
        })
            .then(function () {
                res.end()
            })
    },
    checkItem: function (req, res) {
        db.todoitem.update({
            completed: req.body.completed
        }, {
                where: {
                    id: req.params.id
                }
            }).then(function () {
                res.end()
            })
    },
    updateItem: function (req, res) {
        db.todoitem.update({
            item: req.body.itemTitle,
            details: req.body.itemDetails,
            to_be_completed_by: req.body.itemDate
        }, {
                where: {
                    id: req.params.id
                }
            }).then(function () {
                res.end()
            })
    },
    deleteItem: function (req, res) {
        db.todoitem.destroy({
            where: {
                id: req.params.id
            }
        }).then(function () {
            res.end()
        })
    }

}

