import React, { Component } from "react";
import { ShopConsumer } from "../../context";
import { Link } from "react-router-dom";

import "../../styles/Card/card.css";

class Card extends Component {
  render() {
    const { id, image, name } = this.props.category;
    return (
      <div className="col mb-4">
        <ShopConsumer>
          {(value) => (
            <div>
              <Link to="/shopproduct">
                <div
                  className="card"
                  onClick={() => {
                    value.setProductFromProductCategory(id);
                  }}
                >
                  <img
                    className="card-img-top card-image"
                    src={image}
                    alt={name}
                  />
                  <div className="card-body">
                    <h4 className="card-title category-name">{name}</h4>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </ShopConsumer>
      </div>
    );
  }
}

export default Card;
