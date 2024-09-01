const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "breastcancer"
});

con.connect(function(err) {
    if (err) {
      console.log("Connection to database unsuccessful");
      //throw err;
    }
    else { 
      console.log("Connected to database");
    }
  });

module.exports = con;
