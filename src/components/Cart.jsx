import { StoreContext } from "../context/StoreContext";
import { useContext } from "react";
import { data } from "../data.js";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(StoreContext);
  return (
    <div className="cart-container">
      {Object.keys(cartItems).length === 0 ? (
        <p className="cart-text">No items in cart</p>
      ) : (
        <div className="cart-items">
          {data.row.map((item, index) => {
            if (cartItems[item._itm_cd] > 0) {
              return (
                <div key={index} className="cart-items-item-container">
                  <p className="cart-items-item name">{item._prnt_nam} </p>
                  <p className="cart-items-item">{cartItems[item._itm_cd]}</p>
                  <p
                    className="cart-items-item remove-btn"
                    onClick={() => removeFromCart(item._itm_cd)}
                  >
                    x
                  </p>
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default Cart;
