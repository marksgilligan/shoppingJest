import React, { useState } from "react";
import "./App.css";
import List from "../List/List";

//display all items //
//add to basket button next to each item
//increment/decrement button to change the qty
//implement a max qty
//total price of basket math math

function App() {
  const [basket, setBasket] = useState([]);
  const [itemQuantity, setItemQuantity] = useState({
    "Bottled Beer": 0,
    "Toilet Roll": 0,
    "Plain Flour": 0,
    "Tooth Paste": 0,
  });
  return (
    <div className="App">
      <h1>SHOPPING</h1>
      <ul>
        <List
          itemQuantity={itemQuantity}
          setItemQuantity={setItemQuantity}
          basket={basket}
          setBasket={setBasket}
        />
      </ul>
    </div>
  );
}

export default App;
