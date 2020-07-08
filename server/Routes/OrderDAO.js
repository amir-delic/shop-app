const mysqlconnection = require("../connection");

function getOrdersForUserProfile(req, res) {
  const id = req.query.userId;
  mysqlconnection.query(
    "select p.* from order_item o join product p on o.productId = p.id where o.userId = ?",
    [id],
    function (error, results) {
      if (error) return res.send(error);
      res.status(200).json(results);
    }
  );
}
function addProductToOrders(req, res) {
  const product = req.body;

  mysqlconnection.query("INSERT INTO order_item SET ?", [product], function (
    error,
    results
  ) {
    if (error) return res.send(error);
    mysqlconnection.query(
      `delete from cart where userId = ? and productId = ? limit 1`,
      [product.userId, product.productId],
      function (error, results) {
        if (error) return res.send(error);
        res.status(200).json(results);
      }
    );
  });
}
module.exports = {
  addProductToOrders: addProductToOrders,
  getOrdersForUserProfile: getOrdersForUserProfile,
};
