import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
        ))}
      </ul>
      {cartItems.length > 0 && <button className="proceed-btn">Proceed</button>}
    </div>
  );
};

export default Cart;
