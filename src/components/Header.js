import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header(props) {
  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <h1>Bouquet Shop</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/shop">
                Shop
              </Link>
            </li>
            <li>
              <div className="cart">
                <div className="cart-icon">
                  <i className="fas fa-shopping-bag"></i>
                </div>
                <div className="cart-number">
                  <p>{props.cartQuantity}</p>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
