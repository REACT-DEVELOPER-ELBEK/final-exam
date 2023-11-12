"use client"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { stateType } from "@/types/foodSlicer.type";

const initialState: stateType = {
  data: [],
  loading: false,
  error: false,
  currentPage: 0,
  itemsPerPage: 8,
  totalItems: 0,
};

export const fetchFoods = createAsyncThunk("foods/fetch", async (_, { getState }) => {
  const { currentPage, itemsPerPage } = (getState() as { foods: stateType }).foods;
  const response = await axios(`https://fakestoreapi.com/products?_page=${currentPage}&_limit=${itemsPerPage}`);
  const data = await response.data;
  return data;
});

const foodSlicer = createSlice({
  name: "foods",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload;
    },
  },
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

export const { setCurrentPage, setItemsPerPage } = foodSlicer.actions;
export default foodSlicer.reducer;
