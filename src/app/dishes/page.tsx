import React from "react";
import DishItems from "../routes/dishes/dishItems/DishItems";
import Loading from "../routes/loading/Loading";
import "./DishItems.scss";

const Dishes = () => {
  return (
    <div className="dishes">
      <div className="container">
        <div className="dishes__wrapper">
          <DishItems />
        </div>
      </div>
    </div>
  );
};

export default Dishes;
