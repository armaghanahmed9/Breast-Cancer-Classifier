const db = require('../db');

exports.getUser = (req,res) => {
    console.log("getUser")
    db.query('SELECT * FROM User WHERE userId = ?',[req.userId],(err,results) => {
        if (err) throw err;
        res.json(results);
    })
}

exports.getAllUsers = (req,res) => {
    console.log("getAllUsers");
    db.query('SELECT * FROM User',(err,results) => {
        if (err) throw err;
        res.json(results);
    })
}

exports.createUser = (req,res) => {
    console.log("createUser");
    console.log(req.body);
    db.query('INSERT INTO User SET ?',req.body,(err,results) => {
        if (err) throw err;
        res.json(results)
    } )
}

exports.updateUser = (req,res) => {
    console.log("updateUser");
    console.log(req.body);
    db.query('UPDATE User SET ? WHERE email  = ? ',[req.body,req.body.email],(err,results) => {
        if (err) throw err;
        res.json(results)
    })
}

exports.deleteUser = (req,res) => {
    console.log("deleteUser");
    console.log(req.body);
    db.query('DELETE FROM User WHERE email = ?',[req.body.email],(err,results) => {
        if (err) throw err;
        res.json(results);
    })
}
