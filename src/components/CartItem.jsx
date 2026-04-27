import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, updateQuantity } from "../redux/CartSlice";

function CartItem() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const increase = (item) => {
    dispatch(addItem(item));
  };

  const decrease = (item) => {
    if (item.quantity === 1) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  return (
    <div>
      <h1>Shopping Cart</h1>

      <h2>Total Items: {cart.length}</h2>
      <h2>Total Cost: ${total}</h2>

      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.image} width="100" alt={item.name} />
          <h3>{item.name}</h3>
          <p>${item.price}</p>

          <button onClick={() => increase(item)}>+</button>
          <span>{item.quantity}</span>
          <button onClick={() => decrease(item)}>-</button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Eliminar
          </button>
        </div>
      ))}

      <button onClick={() => alert("Próximamente")}>
        Checkout
      </button>
    </div>
  );
}

export default CartItem;
