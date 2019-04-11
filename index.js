var express = require("express");
var app = express();
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

var routes = require("./controller/api-routes.js");
app.use(routes)

app.listen(PORT, function () {
    console.log("App Connected to: " + PORT);
})




