import React from "react";
import { ShopConsumer } from "../../context";
import AddNewProduct from "../../components/Admin/AddNewProduct";

function AddProduct() {
  return (
    <ShopConsumer>
      {(value) => {
        return <AddNewProduct addNewProduct={value.addNewProduct} />;
      }}
    </ShopConsumer>
  );
}

export default AddProduct;
