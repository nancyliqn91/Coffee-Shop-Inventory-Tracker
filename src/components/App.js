import React from "react";
import Header from "./Header";
import './../App.css';
import CoffeeControl from "./CoffeeControl";

function App(){

  return (
    <React.Fragment>
      <Header />
      <CoffeeControl />
    </React.Fragment>
  );
}

export default App;