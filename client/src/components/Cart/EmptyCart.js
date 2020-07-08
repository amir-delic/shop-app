import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Cart/emptycart.css";

function EmptyCart() {
  return (
    <div className="EmptyCart">
      <div className="EmptyCart-Banner">
        <h1>Your Shopping Cart is empty!</h1>
        <hr></hr>
        <p>Go to Shop page...</p>
        <Link to="/shop">
          <button className="btn btn-primary btn-lg">Shop Now</button>
        </Link>
      </div>
    </div>
  );
}

export default EmptyCart;
