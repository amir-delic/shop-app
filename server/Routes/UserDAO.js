const mysqlconnection = require("../connection");

function getAllUser(req, res) {
  mysqlconnection.query(
    "SELECT id,firstName,lastName,image,email,address FROM user WHERE role='user'",
    function (error, results, fields) {
      if (error) return res.send(error);
      res.status(200).json(results);
    }
  );
}
function registerNewUser(req, res) {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;
  var address = req.body.address;
  var password = req.body.password;
  mysqlconnection.query(
    `INSERT INTO user (firstName,lastName,email,password,address) VALUES
      ('${firstName}','${lastName}','${email}','${password}','${address}');`,
    function (error, results, fields) {
      if (error)
        return res.json({
          status: false,
          data: error,
          message: "This user alredy exist",
        });
      res.status(200).json({
        status: false,
        id: results.insertId,
        Admin: false,
        message: "successfully register",
      });
    }
  );
}
function loginUser(req, res) {
  var email = req.params.email;
  var password = req.params.password;
  mysqlconnection.query(`SELECT * FROM user WHERE email=?`, [email], function (
    error,
    results,
    fields
  ) {
    if (error) {
      res.json({
        status: false,
        message: "there are some error with query",
      });
    } else {
      if (results.length > 0) {
        if (
          password == results[0].password &&
          results[0].email == "amir_mvp4@hotmail.com"
        ) {
          res.json({
            status: true,
            data: results[0],
            Admin: true,
            message: "You are admin",
          });
        } else if (password == results[0].password) {
          res.json({
            status: true,
            data: results[0],
            Admin: false,
            message: "successfully authenticated",
          });
        } else {
          res.json({
            status: false,
            message: "Email and password does not match",
          });
        }
      } else {
        res.json({
          status: false,
          message: "Email does not exits",
        });
      }
    }
  });
}
function deleteCustomer(req, res) {
  var id = req.body.id;
  mysqlconnection.query("DELETE FROM user WHERE id = ?", [id], function (
    error,
    results,
    fields
  ) {
    if (error) return res.send(error);
    res.status(200).json(results);
  });
}
module.exports = {
  getAllUserFromMySQL: getAllUser,
  registerNewUserInMySQL: registerNewUser,
  deleteCustomer: deleteCustomer,
  loginUser: loginUser,
};
