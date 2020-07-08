import React, { Component } from "react";
import { ShopConsumer } from "../../context";
import { Link } from "react-router-dom";
import ProductItem from "../../components/Item/productItem";
import "../../styles/Admin/products.css";

class Products extends Component {
  render() {
    return (
      <ShopConsumer>
        {(value) => {
          return (
            <div className="Products-Main">
              <div className="container">
                <div className="Products-Main-Header">
                  <h1>Products in shop</h1>
                  <Link to="/addproducts">
                    <button className=" btn btn-success ">
                      Add New Product
                    </button>
                  </Link>
                </div>

                <table className="table table-hover table-products table-dark">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Description</th>
                      <th scope="col">Remove</th>
                      <th scope="col">Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {value.products.map((item) => (
                      <ProductItem
                        key={item.id}
                        item={item}
                        deleteProduct={value.deleteProduct}
                        setEditProduct={value.setEditProduct}
                        openEditProductModal={value.openEditProductModal}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        }}
      </ShopConsumer>
    );
  }
}

export default Products;
