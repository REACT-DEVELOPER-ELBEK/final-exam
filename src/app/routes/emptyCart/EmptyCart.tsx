"use client";
import React from "react";
import "./EmptyCart.scss";
import { BiArrowBack } from "react-icons/bi";
import { GiShoppingCart } from "react-icons/gi";
import Link from "next/link";

const EmptyCart = () => {
  return (
    <div className="empty">
      <div className="container">
        <div className="empty__wrapper">
          <div className="empty__logo">
            <h1>
              <GiShoppingCart />
            </h1>
          </div>
          <div className="empty__content">
            <h2>Your cart is currently empty</h2>
            <p>
              Before proceed to checkout, you have to add some products to your
              cart.
            </p>
            <p>
              You will find a lot of interesting products on our "Dishes" page.
            </p>
            <Link href='/dishes'>
              <BiArrowBack /> return to shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
