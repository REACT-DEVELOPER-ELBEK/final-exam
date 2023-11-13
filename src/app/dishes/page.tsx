"use client";
import React, { useState } from "react";
import DishItems from "../routes/dishes/dishItems/DishItems";
import Loading from "../routes/loading/Loading";
import "./DishItems.scss";
import { useDispatch } from "react-redux";
import { fetchFoods } from "@/redux/slices/foodSlicer";
import { AppDispatch } from "@/redux/store";
import Options from "../routes/dishes/options/Options";

const Dishes = () => {
  return (
    <div className="dishes">
      <div className="container">
        <div className="dishes__wrapper">
          <DishItems />
          <Options />
        </div>
      </div>
    </div>
  );
};

export default Dishes;
