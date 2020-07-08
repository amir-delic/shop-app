import React, { Component } from "react";
import { ShopConsumer } from "../../context";
import EditProductModal from "../../components/Modal/EditProductModal";

class EditModal extends Component {
  render() {
    return (
      <ShopConsumer>
        {(value) => {
          if (!value.productIsEdit) {
            return null;
          } else {
            return (
              <EditProductModal
                closeEditProductModal={value.closeEditProductModal}
                editProduct={value.editProduct}
                updateProduct={value.updateProduct}
              />
            );
          }
        }}
      </ShopConsumer>
    );
  }
}

export default EditModal;
