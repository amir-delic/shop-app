const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  path: "3306",
  password: "1234",
  database: "shop_app",
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("DB connected");
  } else {
    console.log("Errrrror --->" + err);
  }
});

module.exports = mysqlConnection;
