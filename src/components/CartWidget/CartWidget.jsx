import"./CartWidget.css";

const CartWidget = ({ count = 2 }) => {
  return (
    <div className="cart">
      <span className="cart__icon" role="img" aria-label="carrito">
        🛒
      </span>

      <span className="cart__badge">
        {count}
      </span>
    </div>
  );
};

export default CartWidget;