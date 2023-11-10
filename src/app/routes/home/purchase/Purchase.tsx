import React from "react";
import "./Purchase.scss";
import Image from "next/image";
import purchase1 from "../../../../../public/purchase1.png";
import purchase2 from "../../../../../public/purchase2.png";
import purchase3 from "../../../../../public/purchase3.png";
import Link from "next/link";
import { GoTriangleDown } from "react-icons/go";
import expense from "../../../../../public/expense.svg";
import voucher from "../../../../../public/voucher.svg";
import expenseLine from "../../../../../public/purchase-1.svg";
import voucherLine from "../../../../../public/purchase-2.svg";

const Purchase = () => {
  return (
    <div className="purchase">
      <div className="purchase__items">
        <h1>
          Control <span>Purchases</span> Via Dashboard
        </h1>
        <div className="purchase__items__card__parent">
          <Link href="#" className="purchase__items__card">
            <Image src={purchase1} alt="" />
            <div className="purchase__items__card__content">
              <h2>Chicken Hell</h2>
              <p>On The Way</p>
            </div>
            <h4>Yesterday</h4>
          </Link>

          <Link href="#" className="purchase__items__card">
            <Image src={purchase2} alt="" />
            <div className="purchase__items__card__content">
              <h2>Swe Dish</h2>
              <p>Delivered</p>
            </div>
            <h4>Yesterday</h4>
          </Link>

          <Link href="#" className="purchase__items__card">
            <Image src={purchase3} alt="" />
            <div className="purchase__items__card__content">
              <h2>Fish Hell Veg</h2>
              <p>Cancelled</p>
            </div>
            <h4>Yesterday</h4>
          </Link>
        </div>
      </div>
      <div className="purchase__info">
        <button>
          <h2>Purchases</h2>{" "}
          <p>
            This month <GoTriangleDown />
          </p>
        </button>
        <div className="purchase__items">
          <div className="purchase__item">
            <div className="purchase__content__item">
              <Image src={expense} alt="expense-logo" />
              <div className="purchase__item__content">
                <h2>expense</h2>
                <p>Increased By 10%</p>
              </div>
              <div className="purchase__item__price">
                <h3>$409.00</h3>
              </div>
            </div>
            <Image src={expenseLine} alt="line" />
          </div>
          <div className="purchase__item">
            <div className="purchase__content__item">
              <Image src={voucher} alt="expense-logo" />
              <div className="purchase__item__content">
                <h2>Vocher Usage</h2>
                <p>Increased By 5%</p>
              </div>
              <div className="purchase__item__price">
                <h3>$45.78</h3>
              </div>
            </div>
            <Image src={voucherLine} alt="line" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
