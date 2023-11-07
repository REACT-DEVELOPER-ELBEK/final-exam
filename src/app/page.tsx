"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchFoods } from "@/redux/slices/foodSlicer";
import { AppDispatch } from "@/redux/store";
import { login } from "@/types/loginForm.type";
import axios from "axios";

const Home = () => {
  const foodData = useSelector((state: any) => state.foods);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchFoods());
  }, []);
  // console.log(foodData);

  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function submit(): void {
    axios.post("https://api.escuelajs.co/api/v1/auth/login", {
      email,
      password,
    }).then(response=>{
      if(response.data.access_token){
        localStorage.setItem("user_token", response.data.access_token)
      }
    }).catch(error=>console.log(error))
  }

  return (
    <div>
      <input
        type="text"
        name="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default Home;
