var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "ol5tz0yvwp930510.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  username: "znpmqvd2epb4ukea",
  password: "bu9vr9yuln2pb32p",
  port: 3306
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
