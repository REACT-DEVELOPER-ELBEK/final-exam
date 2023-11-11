"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { mapFoods } from "@/types/foodMap.type";

const productView = ({ params: { id } }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios(`https://api.escuelajs.co/api/v1/products/4`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  }, [id]);
  const data = [product]
  console.log(data);
  
  
  return (
    <div className="product">
      <div className="container">
        {data?.map((item:mapFoods) => {
            return (
              <div className="product__wrapper" key={item.id}>
                <div className="product__img">
                  <img src={item.image} alt="" />
                </div>
              </div>
            )
        })}
      </div>
    </div>
  );
};

export default productView;