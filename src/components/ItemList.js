import { Item } from "./Item";
import { items } from "./App";
import img from "../images/new-arrivals-1.svg";

export default function ItemList({ onAddItem }) {
  return (
    <ul className="list">
      {items.map((item) => (
        <Item item={item} img={img} onAddItem={onAddItem} key={item.id} />
      ))}
    </ul>
  );
}
