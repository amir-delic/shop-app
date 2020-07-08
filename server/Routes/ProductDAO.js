const mysqlconnection = require("../connection");

function getAllProducts(req, res) {
  mysqlconnection.query("SELECT * FROM product", function (
    error,
    results,
    fields
  ) {
    if (error) return res.send(error);
    res.status(200).json(results);
  });
}
function getAllProductsCategory(req, res) {
  mysqlconnection.query("SELECT * FROM product_category", function (
    error,
    results,
    fields
  ) {
    if (error) return res.send(error);
    res.status(200).json(results);
  });
}
function searchProduct(req, res) {
  var name = req.query.name;
  mysqlconnection.query(
    `SELECT * FROM product WHERE name LIKE '%${name}%'`,
    function (error, results, fields) {
      if (error) return res.send(error);
      res.status(200).json(results);
    }
  );
}
function getProductByProductCategory(req, res) {
  var productCategoryId = req.query.productCategoryId;
  mysqlconnection.query(
    `SELECT * FROM product WHERE productCategoryId = ${productCategoryId}`,
    function (error, results, fields) {
      if (error) return res.send(error);
      res.status(200).json(results);
    }
  );
}
function getStartedProductFromCategory(req, res) {
  mysqlconnection.query(
    `SELECT * FROM product WHERE productCategoryId = 1`,
    function (error, results, fields) {
      if (error) return res.send(error);
      res.status(200).json(results);
    }
  );
}
function getFeaturedProduct(req, res) {
  mysqlconnection.query(
    "SELECT * FROM product ORDER BY id DESC LIMIT 3",
    function (error, results, fields) {
      if (error) return res.send(error);
      res.status(200).json(results);
    }
  );
}
module.exports = {
  getAllProductsFromMySQL: getAllProducts,
  searchProduct: searchProduct,
  getAllProductCategoryFromMySQL: getAllProductsCategory,
  getProductByProductCategory: getProductByProductCategory,
  getFeaturedProductFromMySQL: getFeaturedProduct,
  getStartedProductFromCategory: getStartedProductFromCategory,
};
