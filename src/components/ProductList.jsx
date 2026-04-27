import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Monstera", price: 20, category: "Indoor" },
  { id: 2, name: "Ficus", price: 15, category: "Indoor" },
  { id: 3, name: "Cactus", price: 10, category: "Succulent" },
  { id: 4, name: "Aloe Vera", price: 12, category: "Succulent" },
  { id: 5, name: "Rose", price: 18, category: "Flowering" },
  { id: 6, name: "Tulip", price: 14, category: "Flowering" }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const [added, setAdded] = useState([]);

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
    setAdded([...added, plant.id]);
  };

  const categories = ["Indoor", "Succulent", "Flowering"];

  return (
    <div style={{ padding: "20px" }}>
      <h1>PLANTAS</h1>

      {categories.map(cat => (
        <div key={cat}>
          <h2>{cat}</h2>

          {plants.filter(p => p.category === cat).map(p => (
            <div key={p.id} className="product-card">
              <p>{p.name} - ${p.price}</p>

              <button
                onClick={() => handleAdd(p)}
                disabled={added.includes(p.id)}
              >
                {added.includes(p.id) ? "AGREGADO" : "AGREGAR"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
