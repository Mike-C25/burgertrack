var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();


router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/cats", function(req, res) {
    cat.create("burger_name", req.body.name, function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/cats/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition: ", condition);

    cat.update({ devoured: req.body.devoured }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
