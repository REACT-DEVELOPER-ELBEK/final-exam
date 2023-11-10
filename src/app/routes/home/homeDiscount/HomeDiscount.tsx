"use client";
import React from "react";
import "./HomeDiscount.scss";
import Image from "next/image";
import discountImg from "../../../../../public/discount-img.png";

const HomeDiscount = () => {
  return (
    <div className="discount">
      <div className="discount__content">
        <h1>get 50%</h1>
        <div className="discount__input">
          <input type="text" placeholder="enter your email adress" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="discount__image">
        <Image src={discountImg} alt="meal" />
      </div>
    </div>
  );
};

export default HomeDiscount;
