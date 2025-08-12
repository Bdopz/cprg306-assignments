import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {

  const [sortBy, setSortBy] = useState("name")

  function handleSort(toSort) {
    switch (sortBy) {
      case "name":
        return [...toSort].sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
      case "category":
        return [...toSort].sort((a, b) => (a.category > b.category) ? 1 : ((b.category > a.category) ? -1 : 0))
    }
  }
    
  return (
    <div className="flex flex-col items-center gap-4 m-4 basis-full">

    {sortBy == "name" ? 
    <div className="flex gap-2">
      <button onClick={() => setSortBy("name")} className="hover:cursor-pointer bg-amber-400 text-black p-1">Name</button>
      <button onClick={() => setSortBy("category")} className="hover:cursor-pointer bg-gray-400 text-black p-1">Category</button>
    </div> :
    <div className="flex gap-2">
      <button onClick={() => setSortBy("name")} className="hover:cursor-pointer bg-gray-400 text-black p-1">Name</button>
      <button onClick={() => setSortBy("category")} className="hover:cursor-pointer bg-amber-400 text-black p-1">Category</button>
    </div>
    }

    {handleSort(items).map((item) => (
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