import React, { useState } from "react";
import ItemList, { produce, pantryItems } from "./storeItem";

export default function GroceryCart() {
  // declare and initialize state 
  const [cart, setCart] = useState([])


  /* Because our next state is derived from our previous state,
    call our state setter with a state setter callback function. */
  const addItem = item => (setCart(prev => [item, ...prev]))


  /* The callback function passed to the filter() method is called 
  with each item in the array as its first argument and the index of each 
  of these items as its second argument. We want our callback function to 
  return true for every item that does not have an index matching the 
  targetIndex of the clicked list item that we want to remove. */
  const removeItem = targetIndex => {
    setCart(prev => {
      return prev.filter((item, index) => index !== targetIndex)
    })
  };

  return (
    <div>
      <h1>Grocery Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li onClick={() => removeItem(index)} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <h2>Produce</h2>
      <ItemList items={produce} onItemClick={addItem} />
      <h2>Pantry Items</h2>
      <ItemList items={pantryItems} onItemClick={addItem} />
    </div>
  );
}