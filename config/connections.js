
var Sequelize = require("sequelize");

var sequelized = new Sequelize("todolist", "root", "root", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});







module.exports = sequelized