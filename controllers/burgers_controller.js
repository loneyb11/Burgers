var express = require("express");

var router = express.Router();
var burger = require ("../models/burger");

router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    burger.all(function(data) {
        var hbsObject = { burgers: data };
    });
});

router.post("/burgers/create", function(req, res) {
    burger.update(req.params.id, function(result) {
        console.log(result);
        res.json("/");
         
    });
});
module.exports = router;