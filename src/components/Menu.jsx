import React, { useState, useEffect } from "react";
import MenuItem from "./MenuItem";
import { data } from "../data";
import { Link } from "react-router-dom";

const Menu = ({ addToCart }) => {
  const [menuItems, setMenuItems] = useState([]);

  // useEffect(() => {
  //   const items = data.data.row.map((item) => ({
  //     itm_cd: item._itm_cd,
  //     prnt_nam: item._prnt_nam,
  //     itm_clr: item._itm_clr,
  //     mnu_sub_grp_id: item._mnu_sub_grp_id,
  //     sub_grp_desc: item._sub_grp_desc,
  //     mnu_grp_id: item._mnu_grp_id,
  //     mnu_grp_desc: item._mnu_grp_desc,
  //   }));
  //   setMenuItems(items);
  // }, []);

  return (
    <div className="menu">
      <Link to="/RestaurantFood" className="menu-explore-link">
        Explore menu
      </Link>
    </div>
  );
};

export default Menu;
