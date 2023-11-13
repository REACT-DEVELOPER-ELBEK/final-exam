"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { stateType } from "@/types/foodSlicer.type";
import { mapFoods } from "@/types/foodMap.type";

const initialState: stateType = {
  data: [],
  loading: false,
  error: false,
  currentPage: 0,
  itemsPerPage: 8,
  totalItems: 0,
};

export const fetchFoods = createAsyncThunk(
  "foods/fetch",
  async (searchTerm) => {
    try {
      const response = await axios(
        `https://fakestoreapi.com/products`
      );
      const data = await response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const foodSlicer = createSlice({
  name: "foods",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFoods.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFoods.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchFoods.rejected, (state) => {
        state.error = true;
        console.log("@foods/fetch 404 error");
        state.loading = false;
      });
  },
});

export default foodSlicer.reducer;
