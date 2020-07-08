import React, { Component } from "react";
import "../../styles/Item/useritem.css";

class UserItem extends Component {
  render() {
    const { firstName, lastName, email, image, address } = this.props.user;
    return (
      <tr className="item">
        <th scope="row">
          <img src={image} alt={firstName} className="UserItem-Image" />
        </th>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td>{address}</td>
        <td>
          <i
            className="fas fa-trash-alt UserItem-Trash"
            onClick={() => this.props.deleteCustomer(this.props.user)}
          ></i>
        </td>
      </tr>
    );
  }
}

export default UserItem;
