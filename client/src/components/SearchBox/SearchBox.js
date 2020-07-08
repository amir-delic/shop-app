import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "../../styles/SearchBox/searchBox.css";

export class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newName = { ...this.state };
    this.props.searchProductByName(newName);
    this.props.history.push("/searchproduct");
  };
  render() {
    return (
      <div className="SearchBox">
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <input
            type="text"
            placeholder="Search..."
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <button type="submit" className="btn btn-dark ">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBox);
