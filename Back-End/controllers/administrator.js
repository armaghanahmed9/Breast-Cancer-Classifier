const db = require('../db');

exports.getAdministrator = (req,res) => {
    console.log("getAdministrator")
    db.query('SELECT * FROM Administrator WHERE userId = ?',[req.administratorId],(err,results) => {
        if (err) throw err;
        res.json(results);
    })
}

exports.getAllAdministrators = (req,res) => {
    console.log("getAllAdministrators");
    db.query('SELECT * FROM Administrator',(err,results) => {
        if (err) throw err;
        res.json(results);
    })
}

exports.createAdministrator = (req,res) => {
    console.log("createAdministrator");
    console.log(req.body);
    db.query('INSERT INTO Administrator SET ?',req.body,(err,results) => {
        if (err) throw err;
        res.json(results)
    } )
}

exports.updateAdministrator = (req,res) => {
    console.log("updateAdministrator");
    console.log(req.body);
    db.query('UPDATE Administrator SET ? WHERE email  = ? ',[req.body,req.body.email],(err,results) => {
        if (err) throw err;
        res.json(results)
    })
}

exports.deleteAdministrator = (req,res) => {
    console.log("deleteAdministrator");
    console.log(req.body);
    db.query('DELETE FROM Administrator WHERE email = ?',[req.body.email],(err,results) => {
        if (err) throw err;
        res.json(results);
    })
}
