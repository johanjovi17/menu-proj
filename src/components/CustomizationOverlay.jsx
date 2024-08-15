import React, { useState } from "react";

const CustomizationOverlay = ({ item, onClose, onAddToCart }) => {
  const [customizations, setCustomizations] = useState([]);

  const handleCustomizationChange = (customization) => {
    setCustomizations([...customizations, customization]);
  };

  const handleAddToCart = () => {
    onAddToCart({ ...item, customizations, id: new Date().getTime() });
    onClose();
  };

  return (
    <div className="customization-overlay">
      <h2>Customize {item.prnt_nam}</h2>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default CustomizationOverlay;
