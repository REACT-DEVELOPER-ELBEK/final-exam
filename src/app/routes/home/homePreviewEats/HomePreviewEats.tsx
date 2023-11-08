"use client";
import React, { useEffect } from "react";
import "./HomePreviewEats.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoods } from "@/redux/slices/foodSlicer";
import { AppDispatch, RootState } from "@/redux/store";

const HomePreviewEats = () => {
  const dispatch = useDispatch<AppDispatch>();
  const foodData = useSelector((state: RootState) => state.foods);
  useEffect(() => {
    dispatch(fetchFoods());
  });
  return <div className="home__preview"></div>;
};

export default HomePreviewEats;
