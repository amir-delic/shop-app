import React, { Component } from "react";
import "../../styles/Modal/editproductmodal.css";

class EditProductModal extends Component {
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
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      price,
      description,
      image,
      info,
      productCategoryId,
    } = this.state;
    this.props.updateProduct(
      this.props.editProduct.id,
      name,
      price,
      description,
      image,
      info,
      productCategoryId
    );
    this.props.closeEditProductModal();
    this.setState({
      name: "",
      price: "",
      description: "",
      image: "",
      info: "",
      productCategoryId: "",
    });
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
      <div className="EditProductModal">
        <div className="EditProductModal-Main">
          <h3>Edit this product</h3>
          <img
            className="EditProductModal-Image"
            src={this.props.editProduct.image}
            alt={this.props.editProduct.name}
          />
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                placeholder={"New name..."}
                className="form-control form-control-lg"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="price"
                value={price}
                onChange={this.handleChange}
                placeholder={"New price..."}
                className="form-control form-control-lg"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="description"
                value={description}
                onChange={this.handleChange}
                placeholder={"New description..."}
                className="form-control form-control-lg"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="image"
                value={image}
                onChange={this.handleChange}
                placeholder={"New image..."}
                className="form-control form-control-lg"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="info"
                value={info}
                onChange={this.handleChange}
                placeholder={"New info..."}
                className="form-control form-control-lg"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="productCategoryId"
                value={productCategoryId}
                onChange={this.handleChange}
                placeholder={"Category of product..."}
                className="form-control form-control-lg"
              />
            </div>

            <button type="submit" className="btn btn-block  btn-primary">
              Save
            </button>
          </form>

          <div className="modal-shop-footer">
            <button
              className="btn btn-block btn-secondary"
              onClick={() => this.props.closeEditProductModal()}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProductModal;
