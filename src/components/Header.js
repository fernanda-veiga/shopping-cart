import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const linkStyle = { textDecoration: "none", color: "#161854" };

  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <h1>Bouquet Shop</h1>
        </div>
        <nav>
          <ul>
            <Link style={linkStyle} to="/">
              <li>Home</li>
            </Link>
            <Link style={linkStyle} to="/shop">
              <li>Shop</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
