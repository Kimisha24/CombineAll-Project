var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "kimisha@511",
    database: "combinedb",
    dateStrings: true

});

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("connected!");

// });

module.exports = con;