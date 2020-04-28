var express = require("express");
var burger = require ("../models/burger.js");


var router = express.Router();

router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    burger.selectAll(function(data) {
        var viewObj = { burgers: data };
        res.render("index", viewObj);
    });
});

router.post("/burgers/create", function(req, res) {
    burger.insertOne("burger_name", req.body.name, function() {
        console.log(result);
        res.redirect("/burgers");
         
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