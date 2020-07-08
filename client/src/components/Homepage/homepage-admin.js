import React from "react";
import { Link } from "react-router-dom";
import { ShopConsumer } from "../../context";
import "../../styles/Homepage/homepage-admin.css";

function HomepageAdmin() {
  return (
    <ShopConsumer>
      {(value) => {
        return (
          <div className="HomepageAdmin-Hero">
            <div className="HomepageAdmin-Hero-Banner">
              <h1>Hello, Admin</h1>
              <hr></hr>
              <p>I hope you are having a great day!</p>
              <div className="HomepageAdmin-Main">
                <Link to="/customers">
                  <div className="HomepageAdmin-customers">
                    <h1>
                      {value.users.length}
                      <span>Customers</span>
                    </h1>
                  </div>
                </Link>
                <Link to="/products">
                  <div className="HomepageAdmin-products">
                    <h1>
                      {value.products.length}
                      <span>Products</span>
                    </h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        );
      }}
    </ShopConsumer>
  );
}

export default HomepageAdmin;
