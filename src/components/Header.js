import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>Bouquet Shop</h1>
      </div>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/shop">
            <li>Shop</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
