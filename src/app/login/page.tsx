"use client";
import { useState } from "react";
import navLogo from "../../../public/nav.svg";
import Image from "next/image";
import "./Login.scss";
import signUpRight from "../../../public/sign-up-right.png";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { CiLock } from "react-icons/ci";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const method = {
    body: { name, email, password },
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow",
  };

  function signUp() {
    axios
      .post("https://eatly-server.vercel.app/api/users/login", {
        body: { name, email, password },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        maxBodyLength: Infinity,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    // localStorage.setItem(
    //   "token",
    //   JSON.stringify(
    //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NGI0YTU4OWQ4NGQzODc4MzJlYjY0NiIsImlhdCI6MTY5OTQzMzA0OCwiZXhwIjoxNzAyMDI1MDQ4fQ.Lu5unc78OBVNhznt32TVXeLFQBHklt7RNX8PRvQBX9I"
    //   )
    // );
    // console.log({ name, password, email });
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
                <button onClick={signUp}>sign up</button>
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
    </div>
  );
};

export default SignUp;
