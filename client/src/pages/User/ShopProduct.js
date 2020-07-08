import React, { Component } from "react";
import { ShopConsumer } from "../../context";
import ProductCard from "../../components/Card/productCard";

import "../../styles/Shoppage/shopproduct.css";

class ShopProduct extends Component {
  render() {
    const category = [
      "",
      "Accessories",
      "Hats",
      "Jackets",
      "Jeans",
      "Shirts",
      "Sneakers",
      "Suits",
      "Ties",
      "Trousers",
    ];
    return (
      <ShopConsumer>
        {(value) => {
          return (
            <div className="ShopProduct">
              <div className="ShopProduct-Card">
                <div className="container">
                  <h1>
                    {category[value.productFromCategory[0].productCategoryId]}
                  </h1>
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                    {value.productFromCategory.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        openAddToCartModal={value.openAddToCartModal}
                        setSingleProductFromShop={
                          value.setSingleProductFromShop
                        }
                        addNewProductInMySQLCart={
                          value.addNewProductInMySQLCart
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

export default ShopProduct;
