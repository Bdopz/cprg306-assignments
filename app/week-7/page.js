"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
  
  const [items, setItems] = useState(itemsData)

  function handleAddItem(item) {
    let newItems = [...items]
    newItems.push(item)
    setItems(newItems)
  }

  return (
    <main>

    <h1 className="text-center mt-2 text-3xl font-bold">Shopping List</h1>

    <NewItem onAddItem={handleAddItem} />
    <ItemList items={items} />

    </main>
  );
}