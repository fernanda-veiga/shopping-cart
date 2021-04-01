import React from "react";
import CounterInput from "react-counter-input";
import bouquets from "../bouquets";
import "../styles/Shop.css";

function Shop(props) {
  const btnStyle = {
    padding: "0px",
    fontFamily: '"Montserrat", sans-serif',
    color: "#161854",
  };
  const inputStyle = {
    outline: "none",
    fontFamily: '"Montserrat", sans-serif',
    color: "#161854",
  };

  return (
    <div className="Shop">
      <div className="container">
        {bouquets.map((bouquet, index) => {
          return (
            <div key={bouquet.id} id={bouquet.id} className="card">
              <img src={bouquet.img} alt={bouquet.name} />
              <div className="card-text">
                <div className="title">
                  <p>{bouquet.name}</p>
                  <p>{bouquet.price}</p>
                </div>

                <div className="quantity">
                  <CounterInput
                    min={0}
                    max={10}
                    onCountChange={(count) => props.handleChange(count, index)}
                    btnStyle={btnStyle}
                    inputStyle={inputStyle}
                  />
                </div>

                <div className="add-to-cart">
                  <button type="button" onClick={props.addToCart}>
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
