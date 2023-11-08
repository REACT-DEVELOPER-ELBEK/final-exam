"use client"
import React from "react";
import navLogo from "../../../../public/nav.svg"
import Image from "next/image";
import './Nav.scss'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav__wrapper">
          <div className="nav__main">
          <div className="nav__logo">
            <Image src={navLogo} alt="" />
            <p>eatly</p>
          </div>
          <div className="nav__links">
            <Link href='/'>Home</Link>
            <Link href='dishes'>Dishes</Link>
          </div>
          </div>
          <div className="nav__actions">
            <Link href='cart'><AiOutlineShoppingCart/></Link>
            <Link href='login'><button>Login</button></Link>
            <Link href='sign-up' className="ewty"><button className="signUp">Sign Up</button></Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
