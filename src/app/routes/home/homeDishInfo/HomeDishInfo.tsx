import React from "react";
import "./HomeDishInfo.scss";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import saved from "../../../../../public/saved.svg";
import dishPreview from "../../../../../public/home-chicken-king.png";

const HomeDishInfo = () => {
  return (
    <div className="dish__info">
      <Image src={dishPreview} alt="chicken" />
      <div className="dish__info__content">
        <h2>The Chicken King</h2>
        <p>
          24min •{" "}
            <AiFillStar />
          4.8
        </p>
        <Image src={saved} alt="saved-logo" />
        <h3></h3>
      </div>
    </div>
  );
};

export default HomeDishInfo;
