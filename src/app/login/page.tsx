"use client";
import { useEffect, useState } from "react";
import navLogo from "../../../public/nav.svg";
import Image from "next/image";
import "./Login.scss";
import signUpRight from "../../../public/sign-up-right.png";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { CiLock } from "react-icons/ci";
import axios from "axios";
import { getCookie, setCookie } from "../utils/cookies";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const userToken = getCookie(!"user_token"?"":"")

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function signUp() {
    const testa = null;
    try {
      const res = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        { email, password }
      );
      const data = res.data;
      const token = data.access_token;
      const pt = test
      
      setCookie("user_token", JSON.stringify(token));
      if (token) {
        toast.success(`Welcome ${name}`, {
          theme: "colored",
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
  

  return (
    <div className="sign__up">
      <div className="container">
        <div className="sign__up__wrapper">
          <div className="sign__up__left">
            <Image src={navLogo} alt="" />

            <div className="sign__up__fields">
              <h1>Sign Up To eatly</h1>
              <div className="sign__up__inputs">
                <div className="input">
                  <label>
                    <BsPerson />
                  </label>
                  <input
                    type="text"
                    placeholder="full name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="input">
                  <label>
                    <HiOutlineMail />
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="input">
                  <label>
                    <CiLock />
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Link href={userToken?"/": ""} onClick={signUp}>sign up</Link>
              </div>
            </div>
          </div>
          <div className="sign__up__right">
            <Image src={signUpRight} alt="" />
            <h2>Find Foods With Love </h2>
            <p>
              Eatly Is The Food Delivery Dashboard And Having More Than 2K+
              Dishes Including Asian, Chinese, Italians And Many More. Our
              Dashboard Helps You To Manage Orders And Money.
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
