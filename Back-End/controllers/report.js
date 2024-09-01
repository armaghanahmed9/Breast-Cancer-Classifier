const db = require("../db")

exports.getReport = (req,res) => {
    console.log("getReport")
    db.query('SELECT * FROM Report where reportId = ?', [req.reportId], (err,results) => {
        if (err) throw error;
        res.json(results)
    })
}

exports.getAllReports = (req,res) => {
    console.log("getAllReports")
    db.query('SELECT * FROM Report', (err,results) => {
        if (err) throw error;
        res.json(results)
    })
}

exports.createReport = (req,res) => {
    console.log("createReport");
    console.log(req.body);
    db.query('INSERT INTO Report SET ?',req.body,(err,results) => {
        if (err) throw err;
        res.json(results)
    } )
}

exports.updateReport = (req,res) => {
    console.log("updateReport");
    console.log(req.body);
    db.query('UPDATE Report SET ? WHERE email  = ? ',[req.body,req.body.email],(err,results) => {
        if (err) throw err;
        res.json(results)
    })
}

exports.deleteReport = (req,res) => {
    console.log("deleteReport");
    console.log(req.body);
    db.query('DELETE FROM Report WHERE email = ?',[req.body.email],(err,results) => {
        if (err) throw err;
        res.json(results);
    })
}