import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>CARRITO</h1>

      {items.map(item => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
          <p>Precio: ${item.price}</p>
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

      <h2>TOTAL DEL CARRITO: ${total}</h2>

      <button>CHECKOUT (PRÓXIMAMENTE)</button>

      <br /><br />

      <Link to="/plants">
        <button>SEGUIR COMPRANDO</button>
      </Link>
    </div>
  );
};

export default CartItem;
