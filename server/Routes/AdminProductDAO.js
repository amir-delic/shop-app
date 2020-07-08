const mysqlconnection = require("../connection");

function addNewProduct(req, res) {
  var name = req.body.name;
  var price = req.body.price;
  var description = req.body.description;
  var image = req.body.image;
  var info = req.body.info;
  var productCategoryId = req.body.productCategoryId;
  mysqlconnection.query(
    `INSERT INTO product (name,price,description,image,info,productCategoryId) VALUES
      ('${name}','${price}','${description}','${image}','${info}','${productCategoryId}');`,
    function (error, results) {
      if (error) return res.send(error);
      res.status(200).json(results.insertId);
    }
  );
}
function deleteProduct(req, res) {
  var id = req.body.id;
  mysqlconnection.query("DELETE FROM product WHERE id = ?", [id], function (
    error,
    results
  ) {
    if (error) return res.send(error);
    res.status(200).json(results);
  });
}
function editProduct(req, res) {
  var id = req.body.id;
  var name = req.body.name;
  var price = req.body.price;
  var description = req.body.description;
  var image = req.body.image;
  var info = req.body.info;
  var productCategoryId = req.body.productCategoryId;
  console.log(req.body);
  mysqlconnection.query(
    `UPDATE product SET name='${name}',price='${price}',description='${description}',image='${image}',info='${info}',productCategoryId='${productCategoryId}' WHERE id=${id};`,
    function (error, results) {
      if (error) return res.send(error);
      res.status(200).json(results.insertId);
    }
  );
}

module.exports = {
  addNewProduct: addNewProduct,
  deleteProduct: deleteProduct,
  editProduct: editProduct,
};
