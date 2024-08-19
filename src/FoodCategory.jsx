// import { useState, useEffect } from "react";
// import { data } from "./data";
// import MenuItem from "./components/MenuItem";

// const FoodCategory = (props) => {
//   return (
//     <div className="FoodCategory">
//       <div className="menu-item-container">
//         {data.row.map((item, i) => {
//           if (props.category === item._mnu_grp_desc) {
//             return (
//               <MenuItem
//                 key={i}
//                 name={item._prnt_nam}
//                 sub_group={item._sub_grp_desc}
//               />
//             );
//           }
//         })}
//       </div>
//     </div>
//   );
// };

// export default FoodCategory;

import React, { useState, useEffect } from "react";
import { data } from "./data";
import MenuItem from "./components/MenuItem";
import SubgroupNav from "./components/SubgroupNav";

const FoodCategory = (props) => {
  const [selectedSubgroup, setSelectedSubgroup] = useState("");
  const [subgroups, setSubgroups] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const items = data.row.filter(
      (item) => item._mnu_grp_desc === props.category
    );
    const subgrp = [...new Set(items.map((item) => item._sub_grp_desc))];
    setSubgroups(subgrp);
    setFilteredItems(items);
    if (subgrp.length > 0) {
      setSelectedSubgroup(subgrp[0]);
    }
  }, [props.category]);

  useEffect(() => {
    const items = data.row.filter(
      (item) =>
        item._mnu_grp_desc === props.category &&
        item._sub_grp_desc === selectedSubgroup
    );
    setFilteredItems(items);
  }, [selectedSubgroup, props.category]);

  return (
    <div className="FoodCategory">
      <SubgroupNav
        subgroups={subgroups}
        selectedSubgroup={selectedSubgroup}
        onSelectSubgroup={setSelectedSubgroup}
      />
      <div className="menu-item-container">
        {filteredItems.map((item, i) => (
          <MenuItem key={i} name={item._prnt_nam} id={item._itm_cd} />
        ))}
      </div>
    </div>
  );
};

export default FoodCategory;

//   const [menuItems, setMenuItems] = useState([]);
//   console.log(menuItems);

//   useEffect(() => {
//     const items = data.row.map((item) => ({
//       itm_cd: item._itm_cd,
//       prnt_nam: item._prnt_nam,
//       itm_clr: item._itm_clr,
//       mnu_sub_grp_id: item._mnu_sub_grp_id,
//       sub_grp_desc: item._sub_grp_desc,
//       mnu_grp_id: item._mnu_grp_id,
//       mnu_grp_desc: item._mnu_grp_desc,
//     }));
//     setMenuItems(items);
//   }, []);
