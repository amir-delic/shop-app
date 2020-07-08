import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/Admin/addnewproduct.css";

class AddNewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      description: "",
      image: "",
      info: "",
      productCategoryId: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { ...this.state };
    this.props.addNewProduct(newProduct);
    this.setState({
      name: "",
      price: "",
      description: "",
      image: "",
      info: "",
      productCategoryId: "",
    });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const {
      name,
      price,
      description,
      image,
      info,
      productCategoryId,
    } = this.state;
    return (
      <div className="AddNewProduct">
        <div className="container">
          <div className="AddNewProduct-Header">
            <div>
              <h1>Create New Product</h1>
            </div>
            <Link to="/products">
              <button className=" btn btn-light ">Back</button>
            </Link>
          </div>
          <div>
            <form onSubmit={this.handleSubmit} className="AddNewProduct-Main">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  required
                  placeholder="Product Name"
                  className="form-control form-control-lg .bg-secondary"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="price"
                  value={price}
                  onChange={this.handleChange}
                  required
                  placeholder="Price"
                  className="form-control form-control-lg .bg-secondary"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="description"
                  value={description}
                  onChange={this.handleChange}
                  required
                  placeholder="Short Description"
                  className="form-control form-control-lg .bg-secondary"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="image"
                  value={image}
                  onChange={this.handleChange}
                  required
                  placeholder="Image URL"
                  className="form-control form-control-lg .bg-secondary"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="info"
                  value={info}
                  onChange={this.handleChange}
                  required
                  placeholder="Info"
                  className="form-control form-control-lg .bg-secondary"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="productCategoryId"
                  value={productCategoryId}
                  onChange={this.handleChange}
                  required
                  placeholder="Product Category"
                  className="form-control form-control-lg .bg-secondary"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
                Create New Product
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddNewProduct;
