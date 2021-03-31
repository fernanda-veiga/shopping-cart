import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Homepage from "./Homepage";
import Shop from "./Shop";
import Footer from "./Footer";
import "../styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
