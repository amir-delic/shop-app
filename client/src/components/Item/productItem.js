import React, { Component } from "react";
import "../../styles/Item/productitem.css";

class ProductItem extends Component {
  render() {
    const { id, image, name, description, price } = this.props.item;
    return (
      <tr className="item">
        <th scope="row">
          <img src={image} alt={name} className="ProductItem-Image" />
        </th>
        <td>{name}</td>
        <td>{price} $</td>
        <td>{description}</td>
        <td>
          <i
            className="fas fa-trash-alt ProductItem-Trash"
            onClick={() => this.props.deleteProduct(this.props.item)}
          ></i>
        </td>
        <td>
          <i
            className="fas fa-edit ProductItem-Edit"
            onClick={() => {
              this.props.setEditProduct(id);
              this.props.openEditProductModal();
            }}
          ></i>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
