import { useState } from "react";
import Item from "./item";
import data from "./items.json"

export default function ItemList() {

  const [itemData, setItemData] = useState([...data].sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)))
  const [sortBy, setSortBy] = useState("name")

  function handleSort(type) {
    setSortBy(type)
    
    switch (type) {
      case "name":
        setItemData([...data].sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)))
        break
      case "category":
        setItemData([...data].sort((a, b) => (a.category > b.category) ? 1 : ((b.category > a.category) ? -1 : 0)))
    }
  }
    
  return (
    <div className="flex flex-col items-center gap-4 m-4 basis-full">

    {sortBy == "name" ? 
    <div className="flex gap-2">
      <button onClick={() => handleSort("name")} className="hover:cursor-pointer bg-amber-400 text-black p-1">Name</button>
      <button onClick={() => handleSort("category")} className="hover:cursor-pointer bg-gray-400 text-black p-1">Category</button>
    </div> :
    <div className="flex gap-2">
      <button onClick={() => handleSort("name")} className="hover:cursor-pointer bg-gray-400 text-black p-1">Name</button>
      <button onClick={() => handleSort("category")} className="hover:cursor-pointer bg-amber-400 text-black p-1">Category</button>
    </div>
    }

    {itemData.map((item) => (
      <Item
        key={item.id}
        name={item.name}
        quantity={item.quantity}
        category={item.category}
      />
    ))}
    
    </div>
  );
}