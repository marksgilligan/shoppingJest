import React from "react";
import "./App.css";
import List from "../List/List";

//display all items
//add to basket button next to each item
//increment/decrement button to change the qty
//implement a max qty
//total price of basket math math

function App() {
  return (
    <div className="App">
      <h1>SHOPPING</h1>
      <ul>
        <List />
      </ul>
    </div>
  );
}

export default App;
