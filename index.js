const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./models")

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const exphbs = require("express-handlebars")
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
const Handlebars = require("handlebars");
const MomentHandler = require("handlebars.moment");
MomentHandler.registerHelpers(Handlebars);

const routes = require("./routes");
app.use(routes)

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App Connected to: " + PORT);
    });
});




