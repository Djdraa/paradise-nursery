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
    <nav className="navbar">
      <Link to="/">INICIO</Link>
      <Link to="/plants">PLANTAS</Link>
      <Link to="/cart">CARRITO 🛒 ({totalItems})</Link>
    </nav>
  );
};

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay">
        <h1 className="home-title">PARADISE NURSERY 🌿</h1>
        <p className="home-text">
          Las mejores plantas para decorar tu hogar
        </p>
        <Link to="/plants">
          <button className="start-button">COMENZAR</button>
        </Link>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </Router>
  );
};

export default App;
