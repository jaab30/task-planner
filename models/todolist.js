var Sequelize = require("sequelize");

var sequelize = require("../config/connections.js");

var ToDoList = sequelize.define("todoitem", {
    item: Sequelize.STRING,
    details: Sequelize.TEXT,
    to_be_completed_by: Sequelize.DATE,
    completed: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
    }
})

ToDoList.sync();

module.exports = ToDoList;