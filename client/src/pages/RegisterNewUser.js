import React from "react";
import { ShopConsumer } from "../context";
import Register from "../components/Sign/register";

function RegisterNewUser() {
  return (
    <ShopConsumer>
      {(value) => {
        return (
          <div className="Sign">
            <h1>~Men's fashion~</h1>
            <div className="Sign-main">
              <Register
                registerUser={value.registerUser}
                activeUser={value.activeUser}
              />
            </div>
          </div>
        );
      }}
    </ShopConsumer>
  );
}

export default RegisterNewUser;
