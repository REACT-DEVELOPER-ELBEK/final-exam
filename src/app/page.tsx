"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useEffect} from "react"
import { fetchFoods } from '@/redux/slices/foodSlicer'
import { AppDispatch } from '@/redux/store'

const Home = () => {
  const foodData = useSelector((state:any)=>state.foods)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(()=>{
    dispatch(fetchFoods())
  }, [])
  console.log(foodData);
  
  return (
    <div>Home</div>
  )
}

export default Home