"use client";
import React, { useState } from "react";
import "./TopDishes.scss";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillStar,
  AiOutlineArrowRight,
} from "react-icons/ai";
import cardTestImg from "../../../../../public/card-test-img.png";
import Image from "next/image";
import Link from "next/link";

const TopDishes = () => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="top__dishes">
      <div className="top__dishes__title">
        <h1>
          Our Top <span>Dishes</span>
        </h1>
      </div>
      <div className="top__dishes__cards">
        <div className="top__dishes__card__item">
          <div className="product__to__cart">
            <button
              onClick={(): void =>
                isLiked ? setIsLiked(false) : setIsLiked(true)
              }
            >
              {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>
          </div>
          <Image src={cardTestImg} alt="test-img" />
          <h5>Healthy</h5>
          <h2>Chicken Hell</h2>
          <h3>
            24min •{" "}
            <span>
              <AiFillStar />
            </span>
            4.8
          </h3>
          <div className="card__action">
            <h2>$12.99</h2>
            <button>+</button>
          </div>
        </div>

        <div className="top__dishes__card__item">
          <div className="product__to__cart">
            <button
              onClick={(): void =>
                isLiked ? setIsLiked(false) : setIsLiked(true)
              }
            >
              {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>
          </div>
          <Image src={cardTestImg} alt="test-img" />
          <h5>Healthy</h5>
          <h2>Chicken Hell</h2>
          <h3>
            24min •{" "}
            <span>
              <AiFillStar />
            </span>
            4.8
          </h3>
          <div className="card__action">
            <h2>$12.99</h2>
            <button>+</button>
          </div>
        </div>

        <div className="top__dishes__card__item">
          <div className="product__to__cart">
            <button
              onClick={(): void =>
                isLiked ? setIsLiked(false) : setIsLiked(true)
              }
            >
              {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>
          </div>
          <Image src={cardTestImg} alt="test-img" />
          <h5>Healthy</h5>
          <h2>Chicken Hell</h2>
          <h3>
            24min •{" "}
            <span>
              <AiFillStar />
            </span>
            4.8
          </h3>
          <div className="card__action">
            <h2>$12.99</h2>
            <button>+</button>
          </div>
        </div>

        <div className="top__dishes__card__item">
          <div className="product__to__cart">
            <button
              onClick={(): void =>
                isLiked ? setIsLiked(false) : setIsLiked(true)
              }
            >
              {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>
          </div>
          <Image src={cardTestImg} alt="test-img" />
          <h5>Healthy</h5>
          <h2>Chicken Hell</h2>
          <h3>
            24min •{" "}
            <span>
              <AiFillStar />
            </span>
            4.8
          </h3>
          <div className="card__action">
            <h2>$12.99</h2>
            <button>+</button>
          </div>
        </div>
      </div>
      <Link href='/dishes'>
        View All <AiOutlineArrowRight />
      </Link>
    </div>
  );
};

export default TopDishes;
