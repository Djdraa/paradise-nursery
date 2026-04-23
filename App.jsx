import React from "react";
import "./App.css";

function App() {

  const handleStart = () => {
    alert("Welcome to Paradise Nursery 🌿");
    // Aquí luego puedes redirigir a la página de productos
  };

  return (
    <div className="home-container">
      <div className="overlay">
        <h1 className="home-title">Paradise Nursery</h1>

        <button 
          className="start-button"
          onClick={handleStart}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
