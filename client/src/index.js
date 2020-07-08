import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ShopProvider } from "./context";
import ScrollToTop from "./components/Scroll/ScrollToTop";

import "./index.css";

ReactDOM.render(
  <ShopProvider>
    <BrowserRouter>
      <ScrollToTop>
        {" "}
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </ShopProvider>,
  document.getElementById("root")
);
