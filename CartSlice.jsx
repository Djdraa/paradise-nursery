import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    // 🔹 Agregar producto al carrito
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1
        });
      }
    },

    // 🔹 Eliminar producto del carrito
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    // 🔹 Actualizar cantidad
    updateQuantity: (state, action) => {
      const { id, amount } = action.payload;

      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.quantity += amount;

        // Evitar cantidades menores a 1
        if (item.quantity <= 0) {
          state.items = state.items.filter(
            (i) => i.id !== id
          );
        }
      }
    }

  }
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
