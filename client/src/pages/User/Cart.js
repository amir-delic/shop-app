import React from "react";
import { ShopConsumer } from "../../context";
import EmptyCart from "../../components/Cart/EmptyCart";
import MyCart from "../../components/Cart/MyCart";

function Cart() {
  return (
    <ShopConsumer>
      {(value) => {
        if (value.cart.length < 1) {
          return <EmptyCart />;
        } else {
          return <MyCart />;
        }
      }}
    </ShopConsumer>
  );
}

export default Cart;
