"use client";
import React, { useEffect, useState } from "react";
import navLogo from "../../../../public/nav.svg";
import Image from "next/image";
import "./Nav.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import { getCookie } from "@/app/utils/cookies";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { active } from "@/types/isAtive.type";

const token = getCookie("user_token");
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="container">
          <div className="nav__wrapper">
            <div className="nav__main">
              <Link href="/" className="nav__logo">
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
                <p>0</p>
                <AiOutlineShoppingCart />
              </Link>
              <Link href="login">
                <button>Login</button>
              </Link>
              <Link href="sign-up" className="ewty">
                <button className="signUp" style={{ color: "#F9F9F9" }}>
                  Sign Up
                </button>
              </Link>
            </div>
            <button
              className="menu"
              onClick={(): void =>
                isOpen ? setIsOpen(false) : setIsOpen(true)
              }
            >
              {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
