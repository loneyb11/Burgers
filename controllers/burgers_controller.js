var express = require("express");

var router = express.Router();
var burger = require ("../models/burger.js");


router.get("/", function(req, res) {
    res.redirect("/burgers");
});
    //burger.selectAll(function(data) {
        //var viewObj = { burgers: data };
        //res.render("index", viewObj);
        router.get("/burgers", function(req, res) {
        burger.selectAll(function(data) {
           // console.log(data);
        res.render("index", { burger_data: data });

    });
});

router.post("/burgers/create", function(req, res) {
    // console.log("creating a burger with new name: ");
   // burger.insertOne("burger_name", req.body.name, function() {
       burger.insertOne(req.body.burger_name, function(result) {
           console.log(result);
           res.redirect("/");
         
    });
});

router.put("/burgers/:id", function(req, res) {
    //burger.updateOne //(req.body.burger_id, function(result){
        burger.updateOne(req.params.id, function(result) {
            console.log(result);
            
                res.sendStatus(200);

          });
    });
module.exports = router;