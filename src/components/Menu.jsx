import React, { useState, useEffect } from "react";
import MenuItem from "./MenuItem";
import { data } from "../data"; // Adjust the path if necessary

const Menu = ({ addToCart, openCustomization }) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const items = data.data.row.map((item) => ({
      itm_cd: item._itm_cd,
      prnt_nam: item._prnt_nam,
      itm_clr: item._itm_clr,
      mnu_sub_grp_id: item._mnu_sub_grp_id,
      sub_grp_desc: item._sub_grp_desc,
      mnu_grp_id: item._mnu_grp_id,
      mnu_grp_desc: item._mnu_grp_desc,
      customizations: [], // Add customizations if any
    }));
    setMenuItems(items);
  }, []);

  const groupedMenuItems = menuItems.reduce((groups, item) => {
    if (!groups[item.sub_grp_desc]) {
      groups[item.sub_grp_desc] = [];
    }
    groups[item.sub_grp_desc].push(item);
    return groups;
  }, {});

  return (
    <div className="menu">
      {Object.keys(groupedMenuItems).map((group) => (
        <div key={group}>
          <h2 className="menu-food-item-category">{group}</h2>
          <ul className="menu-food-item-list">
            {groupedMenuItems[group].map((item) => (
              <MenuItem
                key={item.itm_cd}
                item={item}
                addToCart={addToCart}
                openCustomization={openCustomization}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;
