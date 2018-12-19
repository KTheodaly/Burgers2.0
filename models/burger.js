//for the orm

var orm = require('../config/orm.js');
//const express = require('express');

var burger = {



    // a select all
    selectAll: function (cb) {
        orm.selectAll('burgers', function (res) {
            cb(res);
        });
    },

    // create 
    insertOne: function (cols, vals, cb) {
        //not sure if this is all I need to pass through?
        orm.insertOne('burgers', cols, vals, function (res) {
            cb(res);
        });
    },

    // update
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;