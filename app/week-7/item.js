export default function Item(props) {
  return (
    <div className="border-2 min-w-1/5">

    <ul className="p-2">
        <li>
            <p className="font-bold underline">{props.name}</p>
        </li>
        <li>
            <p>Quantity: {props.quantity}</p>
        </li>
        <li>
            <p>Category: {props.category}</p>
        </li>
    </ul>
    
    </div>
  );
}