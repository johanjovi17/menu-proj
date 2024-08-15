import React from "react";

const MenuItem = ({ item, addToCart, openCustomization }) => {
  const handleAddToCart = () => {
    if (item.customizations && item.customizations.length > 0) {
      openCustomization(item);
    } else {
      addToCart(item);
    }
  };

  return (
    <li className="menu-food-item">
      <div className="menu-food-item-name">{item.prnt_nam}</div>
      <button onClick={handleAddToCart} className="add-btn">
        Add
      </button>
    </li>
  );
};

export default MenuItem;
