var express = require("express");
var burger = require ("../models/burger.js");
var viewObj = { burgers: data };

var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        res.render("index", viewObj);
    });
});

router.post("/burgers/create", function(req, res) {
    console.log("creating a burger with new name: ");
    burger.insertOne("burger_name", req.body.name, function() {
    
        res.render("index", viewObj);
         
    });
});

router.put("/burgers/update/devour/:id", function(req, res) {
    burger.updateOne("burgers", "devoured", req.params.id, function() {
        if (result.changedRows == 0) {
            res.status(404).end();
          } else {
            res.status(200).end();
          }
    });
});

router.delete("/burgers/delete/:id", function(req, res) {
    burger.deleteOne("burgers", req.params.id, function(){
        res.redirect("/burgers");
    });
});
module.exports = router;