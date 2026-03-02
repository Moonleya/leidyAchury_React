import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-6xl px-7 py-10">
      <h2 className="text-2xl font-bold text-gray-900">404 - No encontrado</h2>
      <p className="mt-2 text-gray-600">La ruta no existe.</p>
      <Link className="mt-4 inline-block text-blue-600 underline" to="/">
        Volver al inicio
      </Link>
    </main>
  );
}