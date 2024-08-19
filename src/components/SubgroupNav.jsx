import React from "react";

const SubgroupNav = ({ subgroups, selectedSubgroup, onSelectSubgroup }) => {
  return (
    <div className="subgroup-nav">
      {subgroups.map((subgroup, index) => (
        <button
          key={index}
          className={selectedSubgroup === subgroup ? "active" : ""}
          onClick={() => onSelectSubgroup(subgroup)}
        >
          {subgroup}
        </button>
      ))}
    </div>
  );
};

export default SubgroupNav;
