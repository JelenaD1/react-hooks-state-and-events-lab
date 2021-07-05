import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isOn, setIsOn] = useState(true)
  
  const appClass = () => {
    setIsOn(!isOn)
   
  
  }

  return (
    <div className={isOn ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={appClass}>Dark Mode</button>
      </header>
      <ShoppingList items={items} />

    </div>
  );
}

export default App;
