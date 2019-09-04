var express = require("express");
var app = express();
require("dotenv").config();
var db = require("./models")

var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

var exphbs = require("express-handlebars")
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var Handlebars = require("handlebars");
var MomentHandler = require("handlebars.moment");
MomentHandler.registerHelpers(Handlebars);

var routes = require("./routes");
app.use(routes)

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App Connected to: " + PORT);
    });
});




