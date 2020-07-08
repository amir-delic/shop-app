import React, { Component } from "react";
import { ShopConsumer } from "../../context";
import ProductCard from "../../components/Card/productCard";
import EmptySearch from "../../components/SearchBox/EmptySearch";

class SearchProduct extends Component {
  render() {
    return (
      <ShopConsumer>
        {(value) => {
          if (value.searchedProduct.length < 1) {
            return <EmptySearch />;
          } else {
            return (
              <div className="ShopProduct">
                <div className="ShopProduct-Card">
                  <div className="container">
                    <h1>Search: {value.productFromSearch.name}</h1>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                      {value.searchedProduct.map((product) => (
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
          }
        }}
      </ShopConsumer>
    );
  }
}

export default SearchProduct;
