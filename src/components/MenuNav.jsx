import React from "react";
import { Link } from "react-router-dom";

const MenuNav = () => {
  return (
    <div className="menu-nav">
      <Link to="/RestaurantFood" className="menu-nav-link">
        Restaurant Food
      </Link>
      <Link to="/BarFood" className="menu-nav-link">
        Bar Food
      </Link>
      <Link to="/RoomServices" className="menu-nav-link">
        Room Services
      </Link>
      <Link to="/Beers" className="menu-nav-link">
        Beers
      </Link>
      <Link to="/Spirits" className="menu-nav-link">
        Spirit
      </Link>
      <Link to="/Wines" className="menu-nav-link">
        Wine
      </Link>
      <Link to="/MixersAndJuices" className="menu-nav-link">
        Mixers and Juices
      </Link>
      <Link to="/Cocktails" className="menu-nav-link">
        Cocktails
      </Link>
      <Link to="/HotDrinks" className="menu-nav-link">
        Hot Drinks
      </Link>
      <Link to="/Cart" className="menu-nav-link cart">
        Cart
      </Link>
    </div>
  );
};

export default MenuNav;
