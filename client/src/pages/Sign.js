import React from "react";
import LogIn from "../components/Sign/logIn";
import { ShopConsumer } from "../context";

import "../styles/Sign/sign.css";

function Sign() {
  return (
    <ShopConsumer>
      {(value) => {
        return (
          <div className="Sign">
            <h1>~Men's fashion~</h1>
            <div className="Sign-main">
              <LogIn
                loginUser={value.loginUser}
                activeUser={value.activeUser}
              />
            </div>
          </div>
        );
      }}
    </ShopConsumer>
  );
}

export default Sign;
