import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

const App = () => {
  return (
    <Router>
      <div>
        <nav style={{ background: "#2d6a4f", padding: "10px", color: "white" }}>
          <Link to="/" style={{ margin: "10px", color: "white" }}>INICIO</Link>
          <Link to="/plants" style={{ margin: "10px", color: "white" }}>PLANTAS</Link>
          <Link to="/cart" style={{ margin: "10px", color: "white" }}>CARRITO</Link>
        </nav>

        <Routes>
          <Route path="/" element={
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <h1>PARADISE NURSERY 🌿</h1>
              <Link to="/plants">
                <button>COMENZAR</button>
              </Link>
            </div>
          } />

          <Route path="/about" element={<AboutUs />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
