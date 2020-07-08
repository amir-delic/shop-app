import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/Sign/login.css";

export class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  componentDidUpdate() {
    if (this.props.activeUser.status) {
      this.redirectUser();
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...this.state };
    this.props.loginUser(newUser);
    this.setState({
      email: "",
      password: "",
    });
  };
  redirectUser = () => {
    this.props.history.push("/home");
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="LogIn">
        <div className="LogIn-main">
          <h2>I already have a account</h2>
          <span>Log in with your email and password</span>

          <form onSubmit={this.handleSubmit}>
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <div className="buttons">
              <button className="btn btn-primary btn-block" type="Submit">
                Log In
              </button>
            </div>
          </form>
          <hr></hr>
          <Link to="/register">
            {" "}
            <button className="btn btn-success btn-block">
              Create New Acount
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(LogIn);
