export function Item({ item, img, onAddItem }) {
  return (
    <div class="list__item">
      <img class="product__img" src={img} alt={item.name} />
      <div class="list__details">
        <h3 class="list__name">{item.name}</h3>
      </div>
      <p class="list__price">${item.price} </p>
      <button onClick={() => onAddItem(item)} className="list__item-btn">
        Add to cart
      </button>
    </div>
  );
}
