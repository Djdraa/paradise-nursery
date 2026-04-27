import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 20,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32b0d9b",
    category: "Low Light",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 25,
    image: "https://images.unsplash.com/photo-1616627450161-9f0f2d9d6f8c",
    category: "Flowering",
  },
  {
    id: 3,
    name: "Aloe Vera",
    price: 15,
    image: "https://images.unsplash.com/photo-1587502536263-3c7c1d7bba51",
    category: "Succulent",
  },
  {
    id: 4,
    name: "Spider Plant",
    price: 18,
    image: "https://images.unsplash.com/photo-1600373391096-44c1b2e2c58b",
    category: "Low Light",
  },
  {
    id: 5,
    name: "Fiddle Leaf Fig",
    price: 40,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
    category: "Large Plants",
  },
  {
    id: 6,
    name: "Pothos",
    price: 22,
    image: "https://images.unsplash.com/photo-1598899134739-24c46f58cfdc",
    category: "Hanging",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const isAdded = (id) => cart.some((item) => item.id === id);

  const categories = [...new Set(plants.map((p) => p.category))];

  return (
    <div>
      <h1>Our Plants</h1>

      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {plants
              .filter((p) => p.category === category)
              .map((plant) => (
                <div key={plant.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
                  
                  <img src={plant.image} alt={plant.name} width="150" />

                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>

                  <button
                    onClick={() => dispatch(addItem(plant))}
                    disabled={isAdded(plant.id)}
                  >
                    {isAdded(plant.id) ? "Agregado" : "Añadir a la cesta"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
