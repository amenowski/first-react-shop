import { useState } from "react";
import NavBar from "./NavBar";
import ItemList from "./ItemList";

export const items = [
  {
    id: 0,
    name: "T-shirt with Tape Details",
    price: 20,
    quantity: 1,
  },
  {
    id: 1,
    name: "Skinny Fit Jeans",
    price: 430,
    quantity: 1,
  },
  {
    id: 2,
    name: "Checkered Shirt",
    price: 320,
    quantity: 1,
  },
  {
    id: 3,
    name: "Sleeve Striped T-shirt",
    price: 240,
    quantity: 1,
  },
  {
    id: 4,
    name: "Vertical Striped Shirt",
    price: 230,
    quantity: 1,
  },
  {
    id: 5,
    name: "Courage Graphic T-shirt",
    price: 201,
    quantity: 1,
  },
  {
    id: 6,
    name: "Loose Fit Bermuda Shorts",
    price: 231,
    quantity: 1,
  },
];

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  function handleAddItem(item) {
    if (cartItems.some((el) => el.id === item.id)) return;

    setCartItems((prevItems) => [...prevItems, item]);
  }

  return (
    <div className="app">
      <NavBar cartItems={cartItems} setCartItems={setCartItems} />
      <div className="container">
        <ItemList onAddItem={handleAddItem} />
      </div>
    </div>
  );
}
