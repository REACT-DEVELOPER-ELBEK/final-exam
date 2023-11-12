"use client";
import "./DishItems.scss";
import { fetchFoods } from "@/redux/slices/foodSlicer";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AppDispatch, RootState } from "@/redux/store";
import Loading from "../../loading/Loading";
import { mapFoods } from "../../../../types/foodMap.type";
import { AiFillHeart, AiFillStar, AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/navigation";

const DishItems = () => {

  const dispatch = useDispatch<AppDispatch>();
  const dishData = useSelector((state: RootState) => state.foods.data);
  const loading = useSelector((state: RootState) => state.foods.loading);
  useEffect(() => {
    dispatch(fetchFoods());
  }, []);
  
    interface state{
    cart: any,
    item:any
  }

  const [isLiked, setIsLiked] = useState(false);
  const [cart, setCart] = useState<state[]>([]);
  useEffect(() => {
    try {
      localStorage.setItem("cartProducts", JSON.stringify(cart));
    } catch (error) {
      console.error('Error updating localStorage:', error);
    }
  }, [cart]);

  return loading ? (
    <Loading />
  ) : (
    <div className="dish__items">
      <div className="dish__cards">
        {dishData?.map((item: mapFoods) => {
          return (
            <React.Fragment key={item.id}>
              <div className="top__dishes__card__item" key={item.id}>
                <div className="product__to__cart">
                  <button
                    onClick={(): void =>
                      isLiked ? setIsLiked(false) : setIsLiked(true)
                    }
                  >
                    {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
                  </button>
                </div>
                <img src={item.image} alt="test-img" title={item.description} />
                <h5>{item.category}</h5>
                <Link href={`/product-view/${item.id}`}>{item.title.slice(0, 9)}...</Link>
                <h3>
                  {item.rating.count} •{" "}
                  <span>
                    <AiFillStar />
                  </span>
                  {item.rating.rate}
                </h3>
                <div className="card__action">
                  <h2>${item.price}</h2>
                  <button onClick={() => setCart(()=>[...cart, item])}>+</button>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default DishItems;
