import React, { useState } from "react";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import CustomizationOverlay from "./components/CustomizationOverlay";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [customizingItem, setCustomizingItem] = useState(null);

  const addToCart = (item) => {
    setCartItems([...cartItems, { ...item, id: new Date().getTime() }]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const openCustomization = (item) => {
    setCustomizingItem(item);
  };

  const closeCustomization = () => {
    setCustomizingItem(null);
  };

  return (
    <>
      <h1>Menu</h1>
      <div className="app">
        <Menu addToCart={addToCart} openCustomization={openCustomization} />
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        {customizingItem && (
          <CustomizationOverlay
            item={customizingItem}
            onClose={closeCustomization}
            onAddToCart={addToCart}
          />
        )}
      </div>
    </>
  );
};

export default App;
