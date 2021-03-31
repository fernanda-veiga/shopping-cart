import React from "react";
import { Link } from "react-router-dom";
import "../styles/Homepage.css";
import bouquet from "../images/bride-bouquet.jpg";

function Homepage() {
  return (
    <div className="Homepage">
      <div className="container">
        <div className="Homepage-text">
          <div className="Homepage-text-container">
            <h1>Beautiful flowers for beautiful moments</h1>
            <Link className="button" to="/shop">
              SHOP NOW
            </Link>
          </div>
        </div>
        <div className="Homepage-img">
          <img src={bouquet} alt="Bride holding a flower bouquet" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
