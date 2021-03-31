import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header className="navbar">
      <div className="logo">
        <h1>Bouquet Shop</h1>
      </div>
      <nav>
        <ul>
          <Link className="link" to="/">
            <li>Home</li>
          </Link>
          <Link className="link" to="/shop">
            <li>Shop</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
