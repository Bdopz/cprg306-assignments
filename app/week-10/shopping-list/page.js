"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas"
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { addItem, getItems } from '../_services/shopping-list-service';

export default function Page() {
  
  const [items, setItems] = useState([])
  const [selectedItemName, setSelectedItemName] = useState("")
  const { user } = useUserAuth();

  function handleAddItem(item) {
    addItem(user.uid, item)
    loadItems()
  }

  function handleItemSelect(name) {
    name = name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
    
    if (name.includes(",")) {
      name = name.split(",")[0]
    }

    console.log(name)
    setSelectedItemName(name.trim())
  }

  async function loadItems() {
    getItems(user.uid).then(result => {
      console.log(result)
      setItems(result)
    })
  }

  useEffect(() => {
    loadItems()
  }, [])

  return (
    <main>
      {user === null ?
      <div></div>
      :
      <div>

      <h1 className="text-center mt-2 text-3xl font-bold">Shopping List</h1>

      <NewItem onAddItem={handleAddItem} />

      <div className="flex w-[50%] m-auto">
        <ItemList items={items} onItemSelect={handleItemSelect} />
        <MealIdeas ingredient={selectedItemName} />
      </div>

      </div>
    }
    </main>
  );
}