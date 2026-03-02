import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = ({ products, onAddToCart }) => {
  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
      ))}
    </section>
  );
};

export default ProductGrid;