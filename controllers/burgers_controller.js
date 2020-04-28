var express = require("express");
var burger = require ("../models/burger");


var router = express.Router();

router.get("/", function(req, res) {
    res.redirect("/burger");
});

router.get("/burger", function(req, res) {
    burger.all(function(data) {
        var viewObj = { burgers: data };
        console.log(viewObj);
        res.render("index", viewObj);
    });
});

router.post("/burger/create", function(req, res) {
    burger.create(["burger_name"], [req.body.name], function(data) {
        console.log(result);
        res.redirect("/burger");
         
    });
});
// removed create "/burger/create/update/:id"
router.put("/burger/update/devour/:id", function(req, res) {
    burger.updateOne("burger", "devoured", req.params.id, function() {
        res.redirect("/burger");
    });
});

router.delete("/burger/delete/:id", function(req, res) {
    burger.deleteOne("burger", req.params.id, function(){
        res.redirect("/burger");
    });
});
module.exports = router;