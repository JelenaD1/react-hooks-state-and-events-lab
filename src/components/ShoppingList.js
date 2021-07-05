import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {


const [selectedCategory, setSelectedCategory] = useState("All")

const handleChange = (e) => {
 const userInput = e.target.value
 setSelectedCategory(userInput)
}

 const newArray = items.filter((object) => selectedCategory === object.category)
 console.log(newArray)
 


  const displayItems = () => {

    if (selectedCategory === "All") {
    return items.map((item) => (
      <Item key={item.id} name={item.name} category={item.category} />
    ))} else {
      return newArray.map((item) => (
        <Item key={item.id} name={item.name} category={item.category} />
      ))}
    }
  

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayItems()}
      </ul>
    </div>
  );
}

export default ShoppingList;
