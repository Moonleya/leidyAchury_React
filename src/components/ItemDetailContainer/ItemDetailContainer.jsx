import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../data/products";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer({ onAddToCart }) {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getProducts()
      .then((response) => {
        const productFound = response.find(
          (product) => String(product.id) === String(itemId)
        );
        setItem(productFound);
      })
      .catch((error) => {
        console.error("Error al cargar el producto:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  if (loading) {
    return (
      <main className="mx-auto max-w-6xl px-7 py-10">
        <p className="text-gray-600">Cargando detalle...</p>
      </main>
    );
  }

  if (!item) {
    return (
      <main className="mx-auto max-w-6xl px-7 py-10">
        <p className="text-gray-600">Producto no encontrado.</p>
      </main>
    );
  }

  return <ItemDetail item={item} onAddToCart={onAddToCart} />;
}