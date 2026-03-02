export default function Filters({
  categories = [],
  selectedCategories = [],
  onToggleCategory = () => {},
  priceRanges = [],
  selectedPrice = null,
  onSelectPrice = () => {},
}) {
  return (
    <aside className="w-full md:w-72">
      <div className="rounded-xl bg-gray-50 p-6 ring-1 ring-gray-200">
        {/* Categorías */}
        <h3 className="text-sm font-bold text-gray-800">Categorías</h3>
        <div className="mt-4 border-t border-gray-200" />

        <ul className="mt-4 space-y-3">
          {categories.map((cat) => {
            const checked = selectedCategories.includes(cat.id);

            return (
              <li key={cat.id} className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => onToggleCategory(cat.id)}
                  className="flex items-center gap-3 text-left"
                >
                  {/* checkbox custom */}
                  <span
                    className={[
                      "grid h-4 w-4 place-items-center rounded border",
                      checked
                        ? "border-lime-500 bg-lime-500"
                        : "border-gray-300 bg-white",
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    {checked && (
                      <span className="text-[10px] font-black text-white">
                        ✓
                      </span>
                    )}
                  </span>

                  <span className="text-sm text-gray-700">{cat.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Rango de Precio */}
        <div className="mt-10">
          <h3 className="text-sm font-bold text-gray-800">Rango de Precio</h3>
          <div className="mt-4 border-t border-gray-200" />

          <ul className="mt-4 space-y-3">
            {priceRanges.map((p) => {
              const checked = selectedPrice === p.id;

              return (
                <li key={p.id} className="flex items-center gap-3">
                  <label className="flex cursor-pointer items-center gap-3 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => onSelectPrice(checked ? null : p.id)}
                      className="h-4 w-4 rounded border-gray-300 accent-lime-500"
                    />
                    {p.label}
                  </label>
                </li>
              );
            })}
          </ul>
            
          <button
            type="button"
            onClick={() => onSelectPrice(null)}
            className="mt-5 text-sm font-semibold text-gray-700 hover:underline"
          >
            Limpiar filtros
          </button>
        </div>
      </div>
    </aside>
  );
}