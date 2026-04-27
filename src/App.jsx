import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

const Navbar = () => {
  const items = useSelector(state => state.cart.items);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav style={{ background: "#2d6a4f", padding: "10px" }}>
      <Link to="/" style={{ color: "white", margin: "10px" }}>INICIO</Link>
      <Link to="/plants" style={{ color: "white", margin: "10px" }}>PLANTAS</Link>
      <Link to="/cart" style={{ color: "white", margin: "10px" }}>
        CARRITO 🛒 ({totalItems})
      </Link>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>PARADISE NURSERY 🌿</h1>
            <p>Las mejores plantas para tu hogar.</p>
            <Link to="/plants">
              <button>COMENZAR</button>
            </Link>
          </div>
        } />

        <Route path="/about" element={<AboutUs />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </Router>
  );
};

export default App;
