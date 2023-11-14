"use client";
import { useEffect, useState } from "react";
import navLogo from "../../../public/nav.svg";
import Image from "next/image";
import "./Login.scss";
import signUpRight from "../../../public/sign-up-right.png";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { CiLock } from "react-icons/ci";
import { AiOutlineLoading } from "react-icons/ai";
import axios from "axios";
import { getCookie, setCookie } from "../utils/cookies";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import RootLayout from "../layout";
import Head from "next/head";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const navigation = useRouter();
  const [isShown, setIsShown] = useState(false);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function signUp() {
    if (password.length >= 8) {
      try {
        setIsLoading(true);
        let response = await axios.post(
          "https://api.escuelajs.co/api/v1/auth/login",
          {
            email,
            password,
          }
        );
        if (response.data.access_token) {
          let result = setCookie(
            "access_token",
            JSON.stringify(response.data.access_token)
          );
          toast.success(`Welcome ${name}`, {
            theme: "colored",
          });

          navigation.push("/");
          setIsLoading(false);
          setIsAuthenticated(true);
          setTimeout(() => {
            window.location.reload();
          }, 1200);
          useEffect(() => {
            if (isAuthenticated) {
              navigation.push("/");
            }
          }, []);
          return result;
        }
      } catch {
        toast.error("Invalid username or password", {
          theme: "colored",
        });
        setIsLoading(false);
      }
    }
  }

  return (
    <div className="sign__up">
      <Head>
        <title>Login</title>
      </Head>
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
                    type={isShown?"text":"password"}
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    onClick={() =>
                      isShown ? setIsShown(false) : setIsShown(true)
                    }
                  >
                    {isShown ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </div>
                <button onClick={() => signUp()}>
                  {isLoading ? (
                    <div className="button__loading">
                      <AiOutlineLoading />
                    </div>
                  ) : (
                    "sign up"
                  )}
                </button>
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
