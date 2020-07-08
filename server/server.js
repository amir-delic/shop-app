const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const ProductDAO = require("./ROUTES/ProductDAO");
const UserDAO = require("./ROUTES/UserDAO");
const AdminProductDAO = require("./ROUTES/AdminProductDAO");
const CartDAO = require("./ROUTES/CartDAO");
const OrderDAO = require("./Routes/OrderDAO");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

//ROUTES

//Product
app.get("/getAllProducts", ProductDAO.getAllProductsFromMySQL);
app.get("/getAllProductCategory", ProductDAO.getAllProductCategoryFromMySQL);
app.get("/searchProduct", ProductDAO.searchProduct);
app.get(
  "/getProductFromProductCategory",
  ProductDAO.getProductByProductCategory
);
app.get("/getFeaturedProducts", ProductDAO.getFeaturedProductFromMySQL);
app.get(
  "/getStartedProductFromCategory",
  ProductDAO.getStartedProductFromCategory
);

//User
app.get("/getAllUser", UserDAO.getAllUserFromMySQL);
app.post("/registerNewUser", UserDAO.registerNewUserInMySQL);
app.delete("/deleteCustomer", UserDAO.deleteCustomer);
app.get("/login/:email/:password", UserDAO.loginUser);

//Admin Product
app.post("/addNewProduct", AdminProductDAO.addNewProduct);
app.delete("/deleteProduct", AdminProductDAO.deleteProduct);
app.put("/editProduct", AdminProductDAO.editProduct);

//Cart
app.post("/addProductToCart", CartDAO.addProductToCart);
app.get("/getCartForUser", CartDAO.getCartForUser);
app.delete("/deleteProductFromCart", CartDAO.deleteProductFromCart);
app.delete("/clearProductFromCart", CartDAO.clearProductFromCart);

//Orders
app.post("/addProductToOrders", OrderDAO.addProductToOrders);
app.get("/getOrdersForUserProfile", OrderDAO.getOrdersForUserProfile);

//SERVER RUNNING
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
