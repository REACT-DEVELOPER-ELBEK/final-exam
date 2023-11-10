"use client"
import React, { useEffect } from "react";
import HomeDiscount from "../routes/home/homeDiscount/HomeDiscount";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchFoods } from "@/redux/slices/foodSlicer";
import { mapFoods } from "@/types/foodMap.type";

const Cart = () => {
    const cartData = JSON.parse(localStorage.getItem("cartProducts"))
    console.log(cartData);
    
  return (
    <div className="cart">
      <div className="container">
        <div className="cart__wrapper">
            {
                cartData?.map((item:mapFoods)=>{
                    return (
                        <div className="cart__item" key={item.id}>
                            <div className="product__info">
                                <img src={item.image} alt={item.description} />
                                <div className="product__info__content">
                                    <h2>{item.title.slice(10)}...</h2>
                                    <p>{item.price}</p>
                                </div>
                            </div>
                            <div className="cart__item__actions">
                                <button>-</button>
                                <p>1</p>
                                <button>+</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
      </div>
      <HomeDiscount />
    </div>
  );
};

export default Cart;
