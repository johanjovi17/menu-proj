// import React from "react";

// const MenuItem = ({ name, sub_group }) => {
//   console.log(name);
//   return (
//     <div className="menu-food-item">
//       <p className="menu-food-item-name">{name}</p>
//       <button className="add-btn">Add</button>
//     </div>
//   );
// };

// export default MenuItem;

import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const MenuItem = ({ name, id }) => {
  const { addToCart } = useContext(StoreContext);
  return (
    <div className="menu-food-item">
      <p className="menu-food-item-name">{name}</p>
      <button className="add-btn" onClick={() => addToCart(id)}>
        +
      </button>
    </div>
  );
};

export default MenuItem;
