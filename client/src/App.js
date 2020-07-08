import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./components/Navbar/navbar";
import Homepage from "./pages/Homepage";
import Shoppage from "./pages/User/Shoppage";
import ShopProduct from "./pages/User/ShopProduct";
import SearchProduct from "./pages/User/SearchProduct";
import PageNotFound from "./pages/PageNotFound";
import Sign from "./pages/Sign";
import RegisterNewUser from "./pages/RegisterNewUser";
import About from "./pages/User/About";
import Contact from "./pages/User/Contact";
import Footer from "./components/Footer/footer";
import Customers from "./pages/Admin/Customers";
import Products from "./pages/Admin/Products";
import AddProduct from "./pages/Admin/AddProduct";
import EditModal from "./pages/Admin/EditModal";
import Cart from "./pages/User/Cart";
import AddToCartModal from "./components/Modal/AddToCartModal";
import Profile from "./pages/User/Profile";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Sign} />
          <Route exact path="/home" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/shop" component={Shoppage} />
          <Route exact path="/shopproduct" component={ShopProduct} />
          <Route exact path="/searchproduct" component={SearchProduct} />
          <Route exact path="/customers" component={Customers} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/addproducts" component={AddProduct} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/register" component={RegisterNewUser} />
          <Route exact path="/profile" component={Profile} />

          <Route path="/404" component={PageNotFound} />
          <Redirect to="/404" />
        </Switch>
        <EditModal />
        <AddToCartModal />
        <Footer />
      </div>
    );
  }
}

export default App;
