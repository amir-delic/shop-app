import React, { Component } from "react";
import { ShopConsumer } from "../../context";
import CartItem from "../Item/cartItem";
import "../../styles/Cart/mycart.css";

class MyCart extends Component {
  render() {
    return (
      <ShopConsumer>
        {(value) => {
          return (
            <div
              className={
                value.cart.length > 2
                  ? "MyCart container"
                  : "MyCart MyCart-footer container"
              }
            >
              <h1>My Shopping Cart</h1>
              <table className="table table-hover cart-table">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Description</th>
                    <th scope="col">Buy</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {value.cart.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      deleteProductFromCart={value.deleteProductFromCart}
                      addNewProductInOrders={value.addNewProductInOrders}
                    />
                  ))}

                  <tr>
                    <th>
                      <button
                        className=" btn btn-danger btn-block"
                        onClick={() => value.clearProductFromCart()}
                      >
                        Clear Cart
                      </button>
                    </th>
                  </tr>

                  <tr>
                    <th>TOTAL: {value.totalCartPrice}$</th>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }}
      </ShopConsumer>
    );
  }
}

export default MyCart;
