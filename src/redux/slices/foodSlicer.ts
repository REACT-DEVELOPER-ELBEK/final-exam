import { stateType } from "@/types/foodSlicer.type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFoods = createAsyncThunk("foods/fetch", async () => {
  let response = await axios("https://fakestoreapi.com/products");
  let data = await response.data;
  return data;
});

const initialState: stateType = {
  data: [],
  loading: false,
  error: false,
};

const foodSlicer = createSlice({
  name: "foods/fetch",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchFoods.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFoods.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false
      })
      .addCase(fetchFoods.rejected, (state) => {
        state.error = true;
        console.log("@foods/fetch 404 error");
        state.loading = false
      });
  },
});

export default foodSlicer.reducer;
