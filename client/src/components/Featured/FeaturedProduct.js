import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/Featured/featured-product.css";

class FeaturedProduct extends Component {
  render() {
    const { name, image } = this.props.product;
    return (
      <div className="col mb-4">
        <Link to="/shop">
          <div className="card">
            <img className="card-img-top" src={image} alt={name} />
            <div className="card-body">
              <h4 className="card-title">{name.toUpperCase()}</h4>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default FeaturedProduct;
