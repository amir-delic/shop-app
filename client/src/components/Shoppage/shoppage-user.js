import React, { Component } from "react";
import { ShopConsumer } from "../../context";
import SearchBox from "../../components/SearchBox/SearchBox";
import Card from "../../components/Card/card";

import "../../styles/Shoppage/shoppageuser.css";

export class ShoppageUser extends Component {
  render() {
    return (
      <ShopConsumer>
        {(value) => {
          return (
            <div className="ShoppageUser">
              <div className="ShoppageUser-Hero">
                <div className="ShoppageUser-Hero-Banner">
                  <h1>~Men's fashion Shop~</h1>
                </div>
                <SearchBox searchProductByName={value.searchProductByName} />
              </div>
              <div className="ShoppageUser-Card">
                <div className="container">
                  <div className="row row-cols-1 row-cols-md-3">
                    {value.productCategory.map((category) => (
                      <Card
                        key={category.id}
                        category={category}
                        setProductFromProductCategory={
                          value.setProductFromProductCategory
                        }
                      />
                    ))}
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

export default ShoppageUser;
