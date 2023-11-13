"use client";
import React, { useState } from "react";
import navLogo from "../../../../public/nav.svg";
import Image from "next/image";
import "./Nav.scss";
import Link from "next/link";
import { getCookie } from "@/app/utils/cookies";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { usePathname } from "next/navigation";

const token = getCookie("user_token");
const Nav = () => {
  const params = usePathname()  
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return params=='/login'?<></>: (
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
                <Link href="/" className={pathname == "/" ? "active" : "none"}>
                  Home
                </Link>
                <Link
                  href="/dishes"
                  className={pathname == "/dishes" ? "active" : "none"}
                >
                  Dishes
                </Link>
              </div>
            </div>
            <div className="nav__actions">
              <Link href="/cart">
                <AiOutlineShoppingCart />
              </Link>
              <Link href="/login">
                <button>Login</button>
              </Link>
              <Link href="/login" className="ewty">
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
