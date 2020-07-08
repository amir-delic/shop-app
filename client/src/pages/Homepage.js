import React from "react";
import { ShopConsumer } from "../context";
import HomepageUser from "../components/Homepage/homepage-user";
import HomepageAdmin from "../components/Homepage/homepage-admin";

function Homepage() {
  return (
    <ShopConsumer>
      {(value) => {
        if (value.activeUser.Admin) {
          return <HomepageAdmin />;
        } else {
          return <HomepageUser />;
        }
      }}
    </ShopConsumer>
  );
}

export default Homepage;
