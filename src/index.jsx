import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";

// REDUX
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/CartSlice";

// CREAR STORE
const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

// RENDERIZAR APP
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
