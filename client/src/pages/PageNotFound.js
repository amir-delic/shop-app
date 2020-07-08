import React from "react";
import { Link } from "react-router-dom";
import "../styles/PageNotFound/pageNotFound.css";

function PageNotFound() {
  return (
    <div className="PageNotFound-Hero">
      <div className="PageNotFound-Hero-Banner">
        <h1>ERROR</h1>
        <hr />
        <p>PAGE NOT FOUND</p>
        <Link to="/home">
          <button className="btn btn-light btn-lg">Return Home</button>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
