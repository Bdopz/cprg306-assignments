import { useState } from "react";

export default function NewItem() {

    const [quantity, setQuantity] = useState(1)

    function increment() {
        if (quantity >= 20) {
            return
        }

        setQuantity(quantity + 1)
    }

    function decrement() {
        if (quantity <= 1) {
            return
        }

        setQuantity(quantity - 1)
    }

    return (
        <div className="border-2 w-fit h-fit mx-auto p-2 mt-10">

        <p className="text-center mb-2">{quantity}</p>

        <div className="flex gap-2">
            <button onClick={decrement} className="bg-red-500 hover:bg-red-400 hover:cursor-pointer text-black text-xl/5 align-middle rounded-sm w-8">-</button>
            <button onClick={increment} className="bg-green-400 hover:bg-green-300 hover:cursor-pointer text-black text-xl/5 align-middle rounded-sm w-8">+</button>
        </div>

        </div>
    );
}