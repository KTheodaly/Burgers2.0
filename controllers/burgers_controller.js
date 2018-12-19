//this is gonna be routes..

const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');


router.post('/burgers', function (req, res) {
    //  res.sendFile(path.join(__dirname,
    burger.insertOne([
        'burger_name'
    ], [
            req.body.burger_name
        ], function (data) {
            res.redirect('/');
        });
});

router.get('/', function (req, res) {
    burger.selectAll(function (data) {
        var burgerObject = {
            burgers: data
        };
        res.render('index', burgerObject);
    });
});

router.put('/burgers/:id', function (req, res) {
    var condition = 'id = ' + req.params.id;

    burger.updateOne({
        devoured: true
    }, condition, function (data) {
        res.redirect('/');
    });
});

module.exports = router;