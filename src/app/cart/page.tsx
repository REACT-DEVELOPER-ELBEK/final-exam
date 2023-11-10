"use client";
import React, { useEffect } from "react";
import HomeDiscount from "../routes/home/homeDiscount/HomeDiscount";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchFoods } from "@/redux/slices/foodSlicer";
import { mapFoods } from "@/types/foodMap.type";
import "./Cart.scss";

const Cart = () => {
  const cartData = JSON.parse(localStorage.getItem("cartProducts"));
  console.log(cartData);

  return (
    <div className="cart">
      <div className="container">
        <div className="cart__wrapper">
          {cartData?.map((item: mapFoods) => {
            return (
              <div className="cart__item" key={item.id}>
                <div className="product__info">
                  <img src={item.image} alt={item.description} />
                  <div className="product__info__content">
                    <h2>{item.title.slice(0, 25)}...</h2>
                    <p>{item.price}</p>
                  </div>
                </div>
                <div className="cart__item__actions">
                  <div className="cart__item__actions__buttons">
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                  </div>
                  <div className="cart__item__actions__total">
                    <h3>$19.99</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="total__count">
          <div className="subtotal">
            <h2>Subtotal</h2>
            <p>$58.96</p>
          </div>
          <div className="subtotal">
            <h2>Delivery</h2>
            <p>$3.59</p>
          </div>
          <div className="total">
            <h2>Total</h2>
            <p>$62.55</p>
          </div>
          <button>Review Payment</button>
        </div>
        <HomeDiscount />
      </div>
    </div>
  );
};

export default Cart;
