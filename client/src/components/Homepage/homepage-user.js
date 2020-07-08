import React, { Component } from "react";
import { ShopConsumer } from "../../context";
import { Link } from "react-router-dom";
import HomepageInfo from "../Info/info";
import FeaturedProduct from "../../components/Featured/FeaturedProduct";
import "../../styles/Homepage/homepage-user.css";

export class HomepageUser extends Component {
  render() {
    return (
      <ShopConsumer>
        {(value) => {
          return (
            <div className="HomepageUser">
              {/* HERO */}
              <div className="HomepageUser-Hero">
                <div className="HomepageUser-Hero-Banner">
                  <h1>~Men's fashion~</h1>
                  <hr />
                  <p>Beautiful man's clothes only for 20$</p>
                  <Link to="/shop">
                    <button className="btn btn-light btn-lg">Shop Now</button>
                  </Link>
                </div>
              </div>
              {/* INFO */}
              <HomepageInfo />
              {/* FEATURED */}
              <div className="HomepageUser-Featured">
                <div className="container">
                  <h1>Featured clothes</h1>
                  <hr id="hr" />
                  <div className="row row-cols-1 row-cols-md-3">
                    {value.featuredProduct.map((product) => {
                      return (
                        <FeaturedProduct key={product.id} product={product} />
                      );
                    })}
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

export default HomepageUser;
