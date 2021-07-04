import React, {useState} from "react";
import items from "../data/items";

function Item({ name, category }) {
  const [isEmpty, setIsEmpty] = useState(true)

  const addItems = () => {
    setIsEmpty(!isEmpty)
   
   
  }


  return (

    <li className={isEmpty ? "" : "in-cart"}>
      
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addItems} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
