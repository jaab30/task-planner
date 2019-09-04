// var Sequelize = require("sequelize");

// var sequelize = require("../config/connections.js");
module.exports = function (sequelize, DataTypes) {
    var ToDoList = sequelize.define("todoitem", {
        item: DataTypes.STRING,
        details: DataTypes.TEXT,
        to_be_completed_by: DataTypes.DATE,
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        }
    });
    return ToDoList;

}

// ToDoList.sync();

// module.exports = ToDoList;