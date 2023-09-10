import { BiTrash } from "react-icons/bi";
import img from "../images/new-arrivals-1.svg";

export default function ShoppingCartItem({
  item,
  onDeleteItem,
  onQuantityChange,
}) {
  return (
    <div className="shoppingcart__item">
      <img className="shoppingcart__item-img" src={img} alt="Item" />
      <div className="shoppingcart__details">
        <h3 className="shoppingcart__item-name">{item.name}</h3>
        <span className="shoppingcart__item-price">
          {item.price * item.quantity}$
        </span>
      </div>
      <select
        className="shoppingcart__quantity"
        value={item.quantity}
        onChange={(e) => onQuantityChange(item.id, Number(e.target.value))}
      >
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <BiTrash
        onClick={() => onDeleteItem(item.id)}
        className="shoppingcart__icon"
      />
    </div>
  );
}
