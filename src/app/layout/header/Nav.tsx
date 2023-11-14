"use client";
import React, { useState } from "react";
import navLogo from "../../../../public/nav.svg";
import Image from "next/image";
import "./Nav.scss";
import Link from "next/link";
import { getCookie, removeCookie } from "@/app/utils/cookies";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import SignUp from "@/app/login/page";
import { CiLogout } from "react-icons/ci";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const token = getCookie("access_token");
const Nav = () => {
  const pathname = usePathname()
  const navigate = useRouter()  
  const [isOpen, setIsOpen] = useState(false);

  function logOut(){
    removeCookie("access_token")
    toast.info("You logged out", {
      theme: "colored"
    })
    setTimeout(() => {
      navigate.push("/login")
    }, 1200);
  }
  return pathname=="/login"?<></>: (
    <>
      <nav>
        <div className={isOpen?"toggle": "none"}>
          <Link href='/'>Home</Link>
          <Link href='/dishes'>Dishes</Link>
        </div>
        <div className="container">
          <div className="nav__wrapper">
            <div className="nav__main">
              <Link href="/" className="nav__logo">
                <Image src={navLogo} alt="" />
                <p>eatly</p>
              </Link>
              <div className="nav__links">
                <Link href="/" className={pathname == "/" ? "active" : ""}>
                  Home
                </Link>
                <Link
                  href="/dishes"
                  className={pathname == "/dishes" ? "active" : ""}
                >
                  Dishes
                </Link>
              </div>
            </div>
            <div className="nav__actions">
              <Link href="/cart">
                <AiOutlineShoppingCart />
              </Link>
              <button>
                <button onClick={()=>logOut()}><p><CiLogout/></p>Logout</button>
              </button>
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
        <ToastContainer/>
      </nav>
    </>
  );
};

export default Nav;
