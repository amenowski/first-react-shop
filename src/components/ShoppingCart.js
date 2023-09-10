import { AiOutlineCloseCircle } from "react-icons/ai";
import ShoppingCartItem from "./ShoppingCartItem";

export default function ShoppingCart({
  onToggleCart,
  cartItems,
  setCartItems,
}) {
  function handleDeleteItem(id) {
    setCartItems((items) => items.filter((item) => item.id !== id));
  }

  function handleQuantityChange(id, newQuantity) {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  }
  const totalPrice = cartItems.reduce(
    (acc, { price, quantity }) => acc + price * quantity,
    0
  );

  return (
    <div className="shoppingcart">
      <header className="shoppingcart__header">
        <h2>Shopping cart</h2>
        <AiOutlineCloseCircle
          onClick={onToggleCart}
          className="shoppingcart__icon shoppingcart__icon--close"
        />
      </header>
      {cartItems.length > 0 ? (
        <>
          <main className="shoppingcart__main">
            {cartItems.map((item) => (
              <ShoppingCartItem
                onDeleteItem={handleDeleteItem}
                item={item}
                key={item.id}
                onQuantityChange={handleQuantityChange}
              />
            ))}
          </main>
          <footer className="shoppingcart__footer">
            <p className="shoppingcart__price">Total price: {totalPrice}$</p>
            <button className="shoppingcart__checkout">Checkout</button>
          </footer>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
}
