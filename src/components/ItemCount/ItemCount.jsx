import { useState } from "react";

export default function ItemCount({ onAddToCart }) {
  const [count, setCount] = useState(1);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };

  return (
    <div className="flex items-center gap-4">
      <button onClick={decrement} className="border px-3 py-2 rounded">
        -
      </button>

      <span className="text-lg font-semibold">{count}</span>

      <button onClick={increment} className="border px-3 py-2 rounded">
        +
      </button>

      <button
        onClick={() => {
          for (let i = 0; i < count; i++) {
            onAddToCart();
          }
        }}
        className="ml-6 rounded bg-lime-100 px-4 py-2 font-semibold hover:bg-lime-200"
      >
        Agregar al carrito
      </button>
    </div>
  );
}