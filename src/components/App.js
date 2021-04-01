import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Homepage from "./Homepage";
import Shop from "./Shop";
import "../styles/App.css";

function App() {
  const [allCount, setAllCount] = useState([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ]);
  const [cartQuantity, setCartQuantity] = useState(0);

  function handleChange(count, index) {
    const newAllCount = allCount;
    newAllCount[index] = count;
    setAllCount(newAllCount);
  }

  function addToCart() {
    const sum = allCount.reduce((a, b) => a + b, 0);
    setCartQuantity(sum);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header cartQuantity={cartQuantity} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route
            exact
            path="/shop"
            render={(props) => (
              <Shop
                {...props}
                handleChange={handleChange}
                addToCart={addToCart}
              />
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
