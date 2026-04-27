import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="overlay">
        <h1 className="home-title">
          Welcome to Paradise Nursery
        </h1>

        <p style={{ color: "white" }}>
          Discover the best indoor plants for your home
        </p>

        <button
          className="start-button"
          onClick={() => navigate("/products")}
        >
          COMENZAR
        </button>
      </div>
    </div>
  );
}

export default App;
