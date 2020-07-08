import React, { Component } from "react";
import { ShopConsumer } from "../../context";
import "../../styles/Card/productcard.css";

export class ProductCard extends Component {
  render() {
    const { id, name, image, price, inCart, bought } = this.props.product;
    return (
      <ShopConsumer>
        {(value) => {
          return (
            <div className="ProductCard">
              <div className="col mb-4">
                <div className="card">
                  <img
                    className="card-img-top ProductCard-image"
                    src={image}
                    alt={name}
                  />
                  <div className="card-footer ProductCard-footer">
                    <small className="text-muted">{name.toUpperCase()}</small>
                    <small className="text-muted">{price}$</small>
                  </div>

                  <div>
                    {bought ? (
                      <button
                        className="button btn btn-dark  ProductCard-btn"
                        disabled
                      >
                        Bought
                      </button>
                    ) : inCart ? (
                      <button
                        className="button btn btn-secondary  ProductCard-btn"
                        disabled
                      >
                        In Cart
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          this.props.setSingleProductFromShop(id);
                          this.props.addNewProductInMySQLCart(id);
                          this.props.openAddToCartModal();
                        }}
                        className="button btn btn-light  ProductCard-btn"
                      >
                        Add To Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ShopConsumer>
    );
  }
}

export default ProductCard;
