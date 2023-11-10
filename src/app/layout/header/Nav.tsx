"use client";
import React, { useEffect, useState } from "react";
import navLogo from "../../../../public/nav.svg";
import Image from "next/image";
import "./Nav.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import { getCookie } from "@/app/utils/cookies";

const token = getCookie("user_token");
const Nav = () => {
  const [cartItems, setCartItems] = useState(0)
useEffect(()=>{
  setCartItems(JSON.parse(localStorage.getItem("cartProducts")).length)
}, [])
  return (
    <>
      <nav>
        <div className="container">
          <div className="nav__wrapper">
            <div className="nav__main">
              <Link href='/' className="nav__logo">
                <Image src={navLogo} alt="" />
                <p>eatly</p>
              </Link>
              <div className="nav__links">
                <Link href="/">Home</Link>
                <Link href="dishes">Dishes</Link>
              </div>
            </div>
            <div className="nav__actions">
              <Link href="/cart">
                <p>{cartItems}</p>
                <AiOutlineShoppingCart />
              </Link>
              <Link href="login">
                <button>Login</button>
              </Link>
              <Link href="sign-up" className="ewty">
                <button className="signUp">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
