import React, { useState } from "react";
import Home from "./Home";
import FoodCategory from "./FoodCategory";
import MenuNav from "./components/MenuNav";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";

const App = () => {
  return (
    <>
      <MenuNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/RestaurantFood"
          index
          element={<FoodCategory category="RESTAURANT FOOD" />}
        />
        <Route path="/BarFood" element={<FoodCategory category="BAR FOOD" />} />
        <Route
          path="/RoomServices"
          element={<FoodCategory category="ROOM SERVICE" />}
        />
        <Route path="/Beers" element={<FoodCategory category="BEERS" />} />
        <Route path="/Spirits" element={<FoodCategory category="SPIRITS" />} />
        <Route path="/Wines" element={<FoodCategory category="WINE" />} />
        <Route
          path="/MixersAndJuices"
          element={<FoodCategory category="MIXERS & JUICES" />}
        />
        <Route
          path="/Cocktails"
          element={<FoodCategory category="COCKTAILS" />}
        />
        <Route
          path="/HotDrinks"
          element={<FoodCategory category="HOT DRINKS" />}
        />
      </Routes>
    </>
  );
};

export default App;
