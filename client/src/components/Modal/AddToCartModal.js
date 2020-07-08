import React, { Component } from "react";
import { ShopConsumer } from "../../context";
import { Link } from "react-router-dom";
import "../../styles/Modal/addtocartmodal.css";

class AddToCartModal extends Component {
  render() {
    return (
      <ShopConsumer>
        {(value) => {
          const { name, image, price, info } = value.singleProduct;
          if (!value.addProductToCart) {
            return null;
          } else {
            return (
              <div className="modal-shop">
                <div className="modal-item">
                  <h3>Add to shopping cart!</h3>
                  <div className="modal-shop-img">
                    <img src={image} alt={name} />
                  </div>
                  <h4>Price: {price}$</h4>

                  <h6>
                    <span className="info-span">Info: </span>
                    {info}
                  </h6>
                  <div className="modal-shop-footer">
                    <Link to="/cart">
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          value.closeAddToCartModal();
                        }}
                      >
                        Go to Shopping Cart
                      </button>
                    </Link>

                    <button
                      className="btn btn-secondary"
                      onClick={() => value.closeAddToCartModal()}
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ShopConsumer>
    );
  }
}

export default AddToCartModal;
