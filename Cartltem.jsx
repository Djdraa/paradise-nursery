import React from "react";

export default function CartItem({ item, onRemove, onUpdateQuantity }) {
  if (!item) return null;

  const handleDecrease = () => {
    const newQty = Math.max(1, item.quantity - 1);
    onUpdateQuantity?.(item.id, newQty);
  };

  const handleIncrease = () => {
    const newQty = item.quantity + 1;
    onUpdateQuantity?.(item.id, newQty);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 border rounded-xl bg-white shadow-sm">
      {/* Imagen y datos */}
      <div className="flex items-center gap-4 w-full md:w-2/5">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded-lg"
        />

        <div>
          <h3 className="font-semibold text-green-900">{item.name}</h3>
          <p className="text-sm text-gray-500">${item.price} c/u</p>
        </div>
      </div>

      {/* Controles de cantidad */}
      <div className="flex items-center gap-2">
        <button
          onClick={handleDecrease}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          -
        </button>

        <span className="px-3 font-medium">{item.quantity}</span>

        <button
          onClick={handleIncrease}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          +
        </button>
      </div>

      {/* Subtotal */}
      <div className="font-semibold text-green-700">
        ${item.price * item.quantity}
      </div>

      {/* Eliminar */}
      <button
        onClick={() => onRemove?.(item.id)}
        className="text-red-600 hover:text-red-800 font-medium"
      >
        Eliminar
      </button>
    </div>
  );
}
