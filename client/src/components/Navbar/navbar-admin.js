import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { ShopConsumer } from "../../context";

import "../../styles/Navbar/navbar-admin.css";

class NavbarAdmin extends Component {
  render() {
    return (
      <ShopConsumer>
        {(value) => {
          return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <NavLink className="navbar-brand" to="/home">
                <i className="fas fa-crown"></i>
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <NavLink
                      className="nav-item nav-i"
                      exact
                      activeClassName="active"
                      to="/home"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-item nav-i"
                      exact
                      activeClassName="active"
                      to="/products"
                    >
                      Products
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-item nav-i"
                      exact
                      activeClassName="active"
                      to="/customers"
                    >
                      Customers
                    </NavLink>
                  </li>
                </ul>
                <div className=" my-2 my-lg-0">
                  <NavLink
                    className="nav-item nav-i"
                    exact
                    activeClassName="active"
                    to="/"
                    onClick={() => this.props.logOut()}
                  >
                    Log Out
                  </NavLink>
                </div>
              </div>
            </nav>
          );
        }}
      </ShopConsumer>
    );
  }
}

export default NavbarAdmin;
