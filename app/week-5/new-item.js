import { useState } from "react";

export default function NewItem() {

    const [quantity, setQuantity] = useState(1)
    const [name, setName] = useState("")
    const [category, setCategory] = useState("produce")

    function increment(e) {
        e.preventDefault()
        
        if (quantity >= 20) {
            return
        }

        setQuantity(quantity + 1)
    }

    function decrement(e) {
        e.preventDefault()
        
        if (quantity <= 1) {
            return
        }

        setQuantity(quantity - 1)
    }

    function submitForm(e) {
        e.preventDefault()

        const item = {
            name: name,
            quantity: quantity,
            category: category
        }

        console.log(item)

        alert(`Item added!\nName: ${item.name}\nQuantity: ${item.quantity}\nCategory: ${item.category}`)

        setName("")
        setCategory("produce")
        setQuantity(1)
    }

    return (
        <form onSubmit={submitForm} className="flex-col border-2 w-fit mx-auto mt-10 p-5">
        
        <div className="flex">
            <input required type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Item Name" className="bg-white rounded-sm p-3 mb-3 text-black grow"/>
        </div>

        <div className="flex gap-3 justify-evenly">
            <div className="bg-white rounded-sm p-3">

                <div className="flex gap-2">
                    <p className="text-black text-center text-xl/5 w-8 align-middle">{quantity}</p>
                    <button onClick={decrement} className="bg-red-500 hover:bg-red-400 hover:cursor-pointer text-black text-xl/5 align-middle rounded-sm w-8">-</button>
                    <button onClick={increment} className="bg-green-400 hover:bg-green-300 hover:cursor-pointer text-black text-xl/5 align-middle rounded-sm w-8">+</button>
                </div>

            </div>

            <select className="bg-white rounded-sm text-black p-3" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option className="text-black" value="produce">Produce</option>
                <option className="text-black" value="dairy">Dairy</option>
                <option className="text-black" value="bakery">Bakery</option>
                <option className="text-black" value="meat">Meat</option>
                <option className="text-black" value="frozenFoods">Frozen Foods</option>
                <option className="text-black" value="cannedGoods">Canned Goods</option>
                <option className="text-black" value="dryGoods">Dry Goods</option>
                <option className="text-black" value="beverages">Beverages</option>
                <option className="text-black" value="snacks">Snacks</option>
                <option className="text-black" value="household">Household</option>
                <option className="text-black" value="other">Other</option>
            </select>
        </div>

        <button type="submit" className="bg-blue-400 hover:bg-blue-500 hover:cursor-pointer rounded-sm text-black w-full py-2 mt-3">
            Confirm
        </button>

        </form>
    );
}