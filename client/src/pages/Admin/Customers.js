import React, { Component } from "react";
import { ShopConsumer } from "../../context";
import { Link } from "react-router-dom";
import UserItem from "../../components/Item/userItem";
import "../../styles/Admin/customers.css";

class Customers extends Component {
  render() {
    return (
      <ShopConsumer>
        {(value) => {
          return (
            <div className="Customers-Main">
              <div className="container">
                <div className="Customers-Main-Header">
                  <h1>Our Customers</h1>
                  <Link to="/products">
                    <button className=" btn btn-success">Go to Products</button>
                  </Link>
                </div>

                <table className="table table-hover table-dark table-customers">
                  <thead>
                    <tr>
                      <th scope="col">Image</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Address</th>
                      <th scope="col">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {value.users.map((user) => (
                      <UserItem
                        key={user.id}
                        user={user}
                        deleteCustomer={value.deleteCustomer}
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

export default Customers;
