import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Hero from "../Hero/Hero";
import Filters from "../Filters/Filters";
import ProductGrid from "../ProductGrid/ProductGrid";
import { products as allProducts } from "../data/products";

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

  //categoría activa por URL
  const activeCategory = categoryId ? decodeURIComponent(categoryId) : null;

  // visualmente “checkbox” (solo 1 activo si hay URL)
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(null);

  // Si hay categoría en URL, fuerza el check de esa sola (visual)
  useEffect(() => {
    if (activeCategory) setSelectedCategories([activeCategory]);
  }, [activeCategory]);

  // click en checkbox -> navega a la URL (una sola categoría)
  const toggleCategory = (id) => {
    // si ya estás en esa categoría, vuelve a /
    if (activeCategory === id) {
      navigate("/");
      return;
    }
    navigate(`/category/${encodeURIComponent(id)}`);
  };

  const clearFilters = () => {
    setSelectedPrice(null);
    navigate("/"); // quitar categoría por URL
    setSelectedCategories(["Logística", "Transporte"]); // solo visual para home (opcional)
  };

  // ✅ productos filtrados
  const filteredProducts = useMemo(() => {
    let list = [...allProducts];

    // 1) filtro por URL
    if (activeCategory) {
      list = list.filter((p) => p.category === activeCategory);
    }

    // 2) filtro por rango de precio
    if (selectedPrice === "lt50") list = list.filter((p) => p.price < 50);
    if (selectedPrice === "50-100") list = list.filter((p) => p.price >= 50 && p.price <= 100);
    if (selectedPrice === "gt100") list = list.filter((p) => p.price > 100);

    return list;
  }, [activeCategory, selectedPrice]);

  return (
    <>
      <Hero />

      <main className="mx-auto max-w-6xl px-7 py-10">
        <h2 className="text-xl font-semibold text-gray-900">{greeting}</h2>

        <div className="mt-10 flex flex-col gap-8 md:flex-row">
          <Filters
            categories={CATEGORIES}
            selectedCategories={selectedCategories}
            onToggleCategory={toggleCategory}
            priceRanges={PRICE_RANGES}
            selectedPrice={selectedPrice}
            onSelectPrice={setSelectedPrice}
            onClear={clearFilters}
          />

          <section className="flex-1">
            <ProductGrid products={filteredProducts} onAddToCart={onAddToCart} />
          </section>
        </div>
      </main>
    </>
  );
}
