import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((acc, i) => acc + i.price * i.quantity, 0);
  const totalItems = items.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>CARRITO</h1>

      <h2>Total de productos: {totalItems}</h2>

      {items.map(item => (
        <div key={item.id} className="cart-item">
          <p>{item.name}</p>
          <p>${item.price}</p>
          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() =>
            dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
          }>+</button>

          <button onClick={() =>
            dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
          }>-</button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            ELIMINAR
          </button>
        </div>
      ))}

      <h2>Total carrito: ${total}</h2>

      <button onClick={() => alert("Próximamente")}>
        CHECKOUT
      </button>

      <br /><br />

      <Link to="/plants">
        <button>SEGUIR COMPRANDO</button>
      </Link>
    </div>
  );
};

export default CartItem;
