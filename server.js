var express = require("express");
var bodyParser = require("body-parser");

var db = require ("../models");

var app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: false
}));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

var PORT = process.env.PORT || 3000;
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App now listening on port:", PORT);
    });
});
