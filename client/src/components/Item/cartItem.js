import React, { Component } from "react";
import "../../styles/Item/cartitem.css";

class CartItem extends Component {
  render() {
    const { id, image, name, price, description } = this.props.item;
    return (
      <tr className="item">
        <th scope="row">
          <img src={image} alt={name} className="CartItem-Image" />
        </th>
        <td>{name}</td>
        <td>{price}$</td>
        <td className="cart-description">{description}</td>
        <td>
          <button
            onClick={() => this.props.addNewProductInOrders(id)}
            className="btn btn-primary btn-block "
          >
            Buy
          </button>
        </td>
        <td>
          <i
            className="fas fa-trash-alt cart-trash"
            onClick={() => this.props.deleteProductFromCart(id)}
          ></i>
        </td>
      </tr>
    );
  }
}

export default CartItem;
