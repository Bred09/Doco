const MySQL = require('mysql');

// Connect to DB
var mysql = MySQL.createConnection({
  host: 	"localhost",
  user: 	"root",
  database: "doco",
});

mysql.connect(function(err) {
  if (err) throw err;
  console.log("MySQL Connected!");
});

module.exports = mysql;