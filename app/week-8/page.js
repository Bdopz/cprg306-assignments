"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas"
import { useState } from "react";

export default function Page() {
  
  const [items, setItems] = useState(itemsData)
  const [selectedItemName, setSelectedItemName] = useState("")

  function handleAddItem(item) {
    let newItems = [...items]
    newItems.push(item)
    setItems(newItems)
  }

  function handleItemSelect(name) {
    name = name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
    
    if (name.includes(",")) {
      name = name.split(",")[0]
    }

    console.log(name)
    setSelectedItemName(name.trim())
  }

  return (
    <main>

    <h1 className="text-center mt-2 text-3xl font-bold">Shopping List</h1>

    <NewItem onAddItem={handleAddItem} />

    <div className="flex w-[50%] m-auto">
      <ItemList items={items} onItemSelect={handleItemSelect} />
      <MealIdeas ingredient={selectedItemName} />
    </div>

    </main>
  );
}