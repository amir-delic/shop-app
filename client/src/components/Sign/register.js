import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/Sign/register.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      password: "",
      confirmPassword: "",
    };
    toast.configure();
  }

  redirectUser = () => {
    this.props.history.push("/");
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...this.state };
    if (this.state.password === this.state.confirmPassword) {
      this.props.registerUser(newUser);
      this.redirectUser();
    } else {
      toast.error("Your password don't match!");
    }

    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      password: "",
      confirmPassword: "",
    });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const {
      firstName,
      lastName,
      email,
      address,
      password,
      confirmPassword,
    } = this.state;
    return (
      <div className="Register">
        <div className="Register-main">
          <h2>I do not have a account</h2>
          <span>Create your own account on Men's fashion site! </span>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={this.handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={this.handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={this.handleChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={address}
              onChange={this.handleChange}
              required
            />

            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="Password"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
              placeholder="Confirm Password"
              required
            />
            <hr></hr>
            <button className="btn btn-success btn-block " type="submit">
              Sign Up
            </button>
          </form>
          <Link to="/">
            <button className="btn btn-dark btn-block my-2">Back</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
