// import { getNewBasketState } from "./List";
const getNewBasketState = require("./List");

test("function adds to basket", () => {
  const expected = [{ name: "coke", maxBuy: 3, price: 1 }];
  const actual = getNewBasketState("coke", 3, 1);
  expect(actual).toStrictEqual(expected);
});
