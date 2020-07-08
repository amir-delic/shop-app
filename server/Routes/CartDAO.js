const mysqlconnection = require("../connection");

function addProductToCart(req, res) {
  const product = req.body;
  mysqlconnection.query("INSERT INTO cart SET ?", [product], function (
    error,
    results
  ) {
    if (error) return res.send(error);
    res.status(200).json(results);
  });
}
function getCartForUser(req, res) {
  const id = req.query.userId;
  mysqlconnection.query(
    "select p.* from cart c join product p on c.productId = p.id where c.userId = ?",
    [id],
    function (error, results) {
      if (error) return res.send(error);
      res.status(200).json(results);
    }
  );
}
function deleteProductFromCart(req, res) {
  const userId = req.body.userId;
  const productId = req.body.productId;
  mysqlconnection.query(
    `delete from cart where userId = ${userId} and productId = ${productId} limit 1`,
    function (error, results) {
      if (error) return res.send(error);
      res.status(200).json(results);
    }
  );
}
function clearProductFromCart(req, res) {
  const userId = req.body.userId;
  mysqlconnection.query(`delete from cart where userId = ${userId}`, function (
    error,
    results
  ) {
    if (error) return res.send(error);
    res.status(200).json(results);
  });
}

module.exports = {
  addProductToCart: addProductToCart,
  getCartForUser: getCartForUser,
  deleteProductFromCart: deleteProductFromCart,
  clearProductFromCart: clearProductFromCart,
};
