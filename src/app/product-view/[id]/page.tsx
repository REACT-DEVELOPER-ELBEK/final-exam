"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { mapFoods } from "@/types/foodMap.type";
import { paramState } from "@/types/prams.type";
import { AiFillStar } from "react-icons/ai";
import "./ProductView.scss";

const productView: React.FC<paramState> = ({ params: { id } }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  }, [id]);
  const data = [product];
  

  return (
    <div className="product">
      <div className="container">
        {data?.map((item: mapFoods[] | any, index: number) => (
          <div className="product__wrapper" key={index}>
            <div className="product__image">
              <img src={item.images} alt="" />
            </div>
            <div className="product__content">
              <h1>{item.title}</h1>
              <h2>{item.description}</h2>
              <h3>${item.price}</h3>
              <h4>{item.creationAt}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default productView;
