import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NotFound from "./components/NotFound/NotFound";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <BrowserRouter>
      <NavBar cartCount={cartCount} />

      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer
              greeting="¡Bienvenidos a la tienda WideTech!"
              onAddToCart={handleAddToCart}
            />
          }
        />

        <Route
          path="/category/:categoryId"
          element={
            <ItemListContainer
              greeting="Catálogo por categoría"
              onAddToCart={handleAddToCart}
            />
          }
        />

        <Route
          path="/item/:itemId"
          element={
            <ItemDetailContainer onAddToCart={handleAddToCart} />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}