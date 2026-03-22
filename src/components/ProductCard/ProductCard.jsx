import { Link } from "react-router-dom";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <article className="rounded-2xl border bg-white p-6 text-center shadow-sm">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-lime-400 text-2xl">
        {product.icon}
      </div>

      <h3 className="mt-4 text-xl font-extrabold text-gray-900">
        {product.name}
      </h3>

      <p className="mt-2 text-gray-500">{product.desc}</p>

      <div className="mt-6 text-4xl font-black text-gray-900">
        ${product.price}
        <span className="text-base font-medium text-gray-500">/mes</span>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <Link
          to={`/item/${product.id}`}
          className="rounded-md border px-4 py-3 font-semibold text-gray-900 hover:bg-gray-50"
        >
          Ver detalle
        </Link>

        <button
         onClick={() => onAddToCart()}
          className="flex items-center justify-center gap-2 rounded-md bg-lime-100 px-4 py-3 font-semibold text-gray-900 hover:bg-lime-200"
        >
          <span>🛒</span>
          Agregar al Carrito
        </button>
      </div>
    </article>
  );
}