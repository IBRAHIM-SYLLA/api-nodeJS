var express = require('express');
var db = require('../database/database');
/*************Class userController**************** */
// var userController = [];

class UserController{

    getAllUsers(req, res){
        // recup all Users
        var sql = "SELECT * FROM utilisateurs";
        db.query(sql, (err, result) => {
            if (err) throw err;
            // console.log(result);
            res.status(200);
            res.send(result);
        })
    }

    postUser(req, res){
        // recup all Users
        var sql = "SELECT * FROM utilisateurs";
        db.query(sql, (err, result) => {
            if (err) throw err;
            // console.log(result);
            res.status(200);
            res.send(result);
        })
    }
}
module.exports = UserController;