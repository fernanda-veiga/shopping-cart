import React from "react";
import { Link } from "react-router-dom";
import "../styles/Homepage.css";
import bouquet from "../images/bride-bouquet.jpg";

function Homepage() {
  return (
    <div className="Homepage">
      <div className="Homepage-text">
        <h1>
          Beautiful flowers for
          <br />
          beautiful moments
        </h1>
        <Link className="button" to="/shop">
          SHOP NOW
        </Link>
      </div>
      <div className="Homepage-img">
        <img src={bouquet} alt="Bride holding a flower bouquet" />
      </div>
    </div>
  );
}

export default Homepage;
