const db = require('../db');

exports.getPatient = (req,res) => {
    console.log("getPatient")
    db.query('SELECT * FROM User WHERE patientId = ?',[req.patientId],(err,results) => {
        if (err) throw err;
        res.json(results);
    })
}

exports.getAllPatients = (req,res) => {
    console.log("getAllPatients");
    db.query('SELECT * FROM Patient',(err,results) => {
        if (err) throw err;
        res.json(results);
    })
}

exports.createPatient = (req,res) => {
    console.log("createPatient");
    console.log(req.body);
    db.query('INSERT INTO Patient SET ?',req.body,(err,results) => {
        if (err) throw err;
        res.json(results)
    } )
}

exports.updatePatient = (req,res) => {
    console.log("updatePatient");
    console.log(req.body);
    db.query('UPDATE Patient SET ? WHERE email  = ? ',[req.body,req.body.email],(err,results) => {
        if (err) throw err;
        res.json(results)
    })
}

exports.deletePatient = (req,res) => {
    console.log("deleteUser");
    console.log(req.body);
    db.query('DELETE FROM Patient WHERE email = ?',[req.body.email],(err,results) => {
        if (err) throw err;
        res.json(results);
    })
}
