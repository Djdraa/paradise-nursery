import React, { useMemo, useState } from "react";

// Ejemplo de productos (puedes reemplazarlo por datos desde API o Redux)
const PRODUCTS = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    price: 25,
    category: "Interior",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
  },
  {
    id: 2,
    name: "Sansevieria",
    price: 18,
    category: "Interior",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5b81",
  },
  {
    id: 3,
    name: "Lavanda",
    price: 12,
    category: "Exterior",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    id: 4,
    name: "Pothos",
    price: 15,
    category: "Interior",
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4",
  },
];

export default function ProductList({ onAddToCart }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");

  const categories = ["Todos", "Interior", "Exterior"];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === "Todos" || p.category === category;
      return matchSearch && matchCategory;
    });
  }, [search, category]);

  return (
    <div className="min-h-screen p-6 bg-green-50">
      <h1 className="text-3xl font-bold text-green-800 mb-6">
        Catálogo de Plantas 🌱
      </h1>

      {/* Filtros */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Buscar planta..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full md:w-1/3"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded w-full md:w-1/4"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Lista de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold text-green-900">
                {product.name}
              </h2>
              <p className="text-sm text-gray-500">{product.category}</p>
              <p className="text-green-700 font-bold mt-2">
                ${product.price}
              </p>

              <button
                onClick={() => onAddToCart?.(product)}
                className="mt-4 w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700"
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No se encontraron productos.
        </p>
      )}
    </div>
  );
}
