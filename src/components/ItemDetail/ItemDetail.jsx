import ItemCount from "../ItemCount/ItemCount";

export default function ItemDetail({ item, onAddToCart }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="grid h-28 w-28 place-items-center rounded-full border-2 border-lime-500 text-5xl">
          {item.icon}
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-extrabold text-gray-900">
            {item.name}
          </h1>

          <p className="mt-4 text-gray-600">{item.desc}</p>

          <div className="mt-6 text-3xl font-bold text-gray-900">
            ${item.price} <span className="text-sm text-gray-500">/mes</span>
          </div>

          <div className="mt-8">
            <ItemCount onAddToCart={onAddToCart} />
          </div>
        </div>
      </div>
    </div>
  );
}