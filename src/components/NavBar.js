import { useState } from "react";
import { BiCart } from "react-icons/bi";
import ShoppingCart from "./ShoppingCart";
import Overlay from "./Overlay";

export default function NavBar({ cartItems, setCartItems }) {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  function handleToggleCart(e) {
    setCartIsOpen(!cartIsOpen);
  }

  return (
    <>
      {cartIsOpen && <Overlay />}
      <nav className="nav">
        <div className="nav__wrapper container">
          <div className="nav__categories">
            <button>Clothes</button>
            <button>Shoes</button>
            <button>Accesories</button>
          </div>
          <BiCart className="nav__icon" onClick={handleToggleCart} />
        </div>
        {cartIsOpen && (
          <ShoppingCart
            cartItems={cartItems}
            onToggleCart={handleToggleCart}
            setCartItems={setCartItems}
          />
        )}
      </nav>
    </>
  );
}
