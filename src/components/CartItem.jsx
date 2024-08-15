import React from "react";

const CartItem = ({ item, removeFromCart }) => {
  return (
    <li className="cart-item">
      <div>{item.prnt_nam}</div>
      <button onClick={() => removeFromCart(item.id)} className="remove-btn">
        Remove
      </button>
    </li>
  );
};

export default CartItem;
