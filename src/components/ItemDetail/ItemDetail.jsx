export default function ItemDetail({ item, onAddToCart }) {
  return (
    <main className="mx-auto max-w-6xl px-7 py-10">
      <h2 className="text-3xl font-extrabold text-gray-900">{item.name}</h2>
      <p className="mt-2 text-gray-600">{item.desc}</p>

      <div className="mt-6 text-4xl font-black text-gray-900">
        ${item.price}
        <span className="text-base font-medium text-gray-500">/mes</span>
      </div>

      <button
        onClick={onAddToCart}
        className="mt-8 rounded-md bg-lime-100 px-6 py-3 font-semibold text-gray-900 hover:bg-lime-200"
      >
        🛒 Agregar al carrito
      </button>
    </main>
  );
}