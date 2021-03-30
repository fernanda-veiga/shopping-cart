import React from "react";
//import logo from "../images/logo.png";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h1>Bouquet Shop</h1>
      </div>
      <div className="navigation">
        <ul>
          <li className="link-home">HOME</li>
          <li className="link-shop">SHOP</li>
          <li className="link-cart">
            <i className="fas fa-shopping-bag"></i>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
