import React from "react";
import "./List.css";

const items = [
  {
    name: "Bottled Beer",
    description: "Ice cold beer to see you through the weekend.",
    price: 1.49,
    maxBuy: 5,
    img:
      "https://pluspng.com/img-png/beer-bottle-png-hd-beer-bottle-png-image-png-image-1275.png",
  },
  {
    name: "Toilet Roll",
    description: "Luxury double quilted vanilla infused paper.",
    price: 6,
    maxBuy: 1,
    img:
      "https://www.hygienesuppliesdirect.com/images/main/69/prod206803-hsd-mini-jumbo-toilet-rolls-2ply-195069.jpg",
  },
  {
    name: "Plain Flour",
    description: "Make bread, thicken sauces or pretend its snowing.",
    price: 2.49,
    maxBuy: 3,
    img:
      "https://salvo1968.co.uk/media/catalog/product/cache/2c83c4d31fd0090674a9637ee17e02e6/m/c/mcdougalls_plainflour1.1kg_main_image.jpg",
  },
  {
    name: "Tooth Paste",
    description: "Keep teeth healthy to avoid unnecessary trips to the dentist",
    price: 3,
    maxBuy: 15,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTELvCW552B6si0HeHH9cik4jZQUEh4h0O1ZUZfyhJZDcq9XN8UPA&usqp=CAc",
  },
];

function List({ itemQuantity, setItemQuantity, basket, setBasket }) {
  function handleBasketClick(name, maxBuy, price) {
    setBasket([...basket, { name, maxBuy, price }]);
  }
  console.log(basket);
  function handleIncreaseQty(name) {
    console.log((itemQuantity[name] = itemQuantity[name] + 1));
    setItemQuantity((itemQuantity.name = itemQuantity.name + 1));
  }
  return (
    <>
      {items.map((item, index) => {
        return (

          <li className="listItemContainer">
            <img src={item.img} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <p>{item.maxBuy}</p>
            <p>Quantity: {itemQuantity[item.name]}</p>
            <button onClick={() => handleIncreaseQty(item.name)}>+</button>
            <button
              className="basketButton"
              onClick={() =>
                handleBasketClick(item.name, item.maxBuy, item.price, index)
              }
            >
              Add to Basket
            </button>

          </li>
        );
      })}
    </>
  );
}

export default List;
