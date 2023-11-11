"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { mapFoods } from "@/types/foodMap.type";
interface paramState {
  params: {
    id: string;
  };
}

const productView: React.FC<paramState> = ({ params: { id } }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios(`https://api.escuelajs.co/api/v1/products/4`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  }, [id]);
  const data = [product];
  console.log(data);

  return (
    <div className="product">
      <div className="container">
        {data?.map((item: any) => {
          return (
            <div className="product__wrapper" key={item.id}>
              <div className="product__img">
                <img src={item.image} alt="" />
                <h1>{item.title}</h1>
                <h1>{item.cart}</h1>
                <h1>{item.category}</h1>
                <h1>{item.count}</h1>
                <h1>{item.id}</h1>
                <h1>{item.rating}</h1>
                <h1>{item.rate}</h1>
                <h1>{item.id}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default productView;
