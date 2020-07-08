import React from "react";
import { ShopConsumer } from "../../context";
import NavbarUser from "./navbar-user";
import NavbarAdmin from "./navbar-admin";

import "../../styles/Navbar/navbar.css";

function Navbar() {
  return (
    <ShopConsumer>
      {(value) => {
        if (value.activeUser.status) {
          if (value.activeUser.Admin) {
            return <NavbarAdmin logOut={value.logOut} />;
          } else {
            return (
              <NavbarUser logOut={value.logOut} activeUser={value.activeUser} />
            );
          }
        } else {
          return null;
        }
      }}
    </ShopConsumer>
  );
}

export default Navbar;
