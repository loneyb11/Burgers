var express = require("express");
var burger = require ("../models/burger.js");


var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var viewObj = { burgers: data };
        res.render("index", viewObj);
    });
});

router.post("/burgers/create", function(req, res) {
    console.log("creating a burger with new name: " + req.body.burger_name);
    burger.insertOne("burger_name", req.body.name, function(result) {

        res.json("result");
         
    });
});

router.put("/burgers/update/devour/:id", function(req, res) {
    burger.updateOne("burgers", "devoured", req.params.id, function() {
        res.redirect("/burgers");
    });
});

router.delete("/burgers/delete/:id", function(req, res) {
    burger.deleteOne("burgers", req.params.id, function(){
        res.redirect("/burgers");
    });
});
module.exports = router;