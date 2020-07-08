import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "../../styles/Navbar/navbar-user.css";

class NavbarUser extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink
                className="nav-item"
                exact
                activeClassName="active"
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-item"
                exact
                activeClassName="active"
                to="/shop"
              >
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-item"
                exact
                activeClassName="active"
                to="/about"
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-item"
                exact
                activeClassName="active"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-item"
                exact
                activeClassName="active"
                to="/profile"
              >
                Profile
              </NavLink>
            </li>
          </ul>
          <div className=" my-2 my-lg-0">
            <NavLink
              className="nav-item"
              exact
              activeClassName="active"
              to="/"
              onClick={() => this.props.logOut()}
            >
              Log Out
            </NavLink>
            <NavLink exact activeClassName="active" to="/cart">
              <i className="fas fa-shopping-cart"></i>
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavbarUser;
