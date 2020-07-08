import React from "react";
import { ShopConsumer } from "../../context";
import "../../styles/Profile/profile.css";

function Profile() {
  return (
    <ShopConsumer>
      {(value) => {
        const {
          image,
          firstName,
          lastName,
          email,
          address,
        } = value.activeUser.data;
        return (
          <div className="UserProfile">
            <div className="container">
              <div className="row header">
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4  image">
                  <img src={image} alt={firstName} />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 ">
                  <div className="user-info">
                    {" "}
                    <p className="user-info-name">
                      {firstName + " " + lastName}
                    </p>
                    <p>
                      <span>
                        <i className="far fa-envelope"></i>
                      </span>
                      {"   "}
                      {email}
                    </p>
                    <p>
                      <span>
                        <i className="fas fa-map-marker-alt"></i>
                        {"   "}
                      </span>
                      {address}
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-10 col-lg-4 col-xl-4 items">
                  <div className="items-cart">
                    <h1>{value.cart.length}</h1>
                    <p>Cart</p>
                  </div>
                  <div className="items-orders">
                    <h1>{value.orders.length}</h1>
                    <p>Orders</p>
                  </div>
                </div>
              </div>
              <hr className="profile-hr"></hr>
            </div>
            <h2>My Orders</h2>
            <div className="user-orders">
              {value.orders.map((order) => {
                return (
                  <div key={order.id} className="image-orders">
                    <img src={order.image} alt={order.name} />
                    <div className="bought-cont">
                      <div className="bought">Bought</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      }}
    </ShopConsumer>
  );
}

export default Profile;
