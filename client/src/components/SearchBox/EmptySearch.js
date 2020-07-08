import React from "react";
import { Link } from "react-router-dom";
import "../../styles/SearchBox/emptySearch.css";

function EmptySearch() {
  return (
    <div className="EmptySearch">
      <div className="EmptySearch-Banner">
        <h1>No such product was found!</h1>
        <hr></hr>
        <p>Go to Shop page...</p>
        <Link to="/shop">
          <button className="btn btn-primary btn-lg">Shop Now</button>
        </Link>
      </div>
    </div>
  );
}

export default EmptySearch;
