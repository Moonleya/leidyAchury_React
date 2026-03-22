import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ProductGrid from "../ProductGrid/ProductGrid";
import { getProducts } from "../../data/products";

const CATEGORIES = [
  { id: "Logística", label: "Logística" },
  { id: "Transporte", label: "Transporte" },
  { id: "Atención al Cliente", label: "Atención al Cliente" },
  { id: "Gestión de Personal", label: "Gestión de Personal" },
];

const PRICE_RANGES = [
  { id: "lt50", label: "Menos de $50/mes" },
  { id: "50-100", label: "$50 - $100/mes" },
  { id: "gt100", label: "Más de $100/mes" },
];

export default function ItemListContainer({ greeting, onAddToCart }) {
  const navigate = useNavigate();
  const { categoryId } = useParams();

  const activeCategory = categoryId ? decodeURIComponent(categoryId) : null;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(null);

  useEffect(() => {
    if (activeCategory) {
      setSelectedCategories([activeCategory]);
    } else {
      setSelectedCategories([]);
    }
  }, [activeCategory]);

  useEffect(() => {
    setLoading(true);

    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const toggleCategory = (id) => {
    if (activeCategory === id) {
      navigate("/");
      return;
    }

    navigate(`/category/${encodeURIComponent(id)}`);
  };

  const clearFilters = () => {
    setSelectedPrice(null);
    setSelectedCategories([]);
    navigate("/");
  };

  const filteredProducts = products.filter((product) => {
    let matchesCategory = true;
    let matchesPrice = true;

    if (activeCategory) {
      matchesCategory = product.category === activeCategory;
    }

    if (selectedPrice === "lt50") {
      matchesPrice = product.price < 50;
    } else if (selectedPrice === "50-100") {
      matchesPrice = product.price >= 50 && product.price <= 100;
    } else if (selectedPrice === "gt100") {
      matchesPrice = product.price > 100;
    }

    return matchesCategory && matchesPrice;
  });

  if (loading) {
    return <h2 className="px-7 py-10 text-xl font-semibold">Cargando productos...</h2>;
  }

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-7 pt-10">
          <div className="rounded-2xl border bg-gray-50 px-10 py-12 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-6">
              <div className="flex gap-2 pt-2">
                <span className="w-1 h-20 rounded-full bg-purple-800"></span>
                <span className="w-1 h-20 rounded-full bg-purple-500"></span>
                <span className="w-1 h-20 rounded-full bg-lime-500"></span>
              </div>

              <div>
                <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
                  Soluciones de Software
                </h1>

                <p className="mt-4 max-w-xl text-gray-600 text-lg">
                  Soluciones de software especializadas para optimizar tareas clave en logística y transporte.
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 rounded-full bg-lime-100 px-6 py-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-lime-500 text-white text-xl font-bold">
                  ✓
                </div>

                <div>
                  <div className="font-extrabold text-gray-900">ISO 27001</div>
                  <div className="text-xs tracking-[0.25em] text-gray-500 font-semibold">
                    CERTIFIED
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-7 py-10">
        <h2 className="text-xl font-semibold text-gray-900">{greeting}</h2>

        <div className="mt-10 flex flex-col gap-8 md:flex-row">
          <aside className="w-full md:w-72">
            <div className="rounded-xl bg-gray-50 p-6 ring-1 ring-gray-200">
              <h3 className="text-sm font-bold text-gray-800">Categorías</h3>
              <div className="mt-4 border-t border-gray-200" />

              <ul className="mt-4 space-y-3">
                {CATEGORIES.map((cat) => {
                  const checked = selectedCategories.includes(cat.id);

                  return (
                    <li key={cat.id} className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => toggleCategory(cat.id)}
                        className="flex items-center gap-3 text-left"
                      >
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

              <div className="mt-10">
                <h3 className="text-sm font-bold text-gray-800">Rango de Precio</h3>
                <div className="mt-4 border-t border-gray-200" />

                <ul className="mt-4 space-y-3">
                  {PRICE_RANGES.map((p) => {
                    const checked = selectedPrice === p.id;

                    return (
                      <li key={p.id} className="flex items-center gap-3">
                        <label className="flex cursor-pointer items-center gap-3 text-sm text-gray-700">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => setSelectedPrice(checked ? null : p.id)}
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
                  onClick={clearFilters}
                  className="mt-5 text-sm font-semibold text-gray-700 hover:underline"
                >
                  Limpiar filtros
                </button>
              </div>
            </div>
          </aside>

          <section className="flex-1">
            <ProductGrid products={filteredProducts} onAddToCart={onAddToCart} />
          </section>
        </div>
      </main>
    </>
  );
}