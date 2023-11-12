"use client"
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PaginationState {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
}

const initialState: PaginationState = {
  currentPage: 1,
  itemsPerPage: 10,
  totalItems: 0,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
    },
    setTotalItems: (state, action: PayloadAction<number>) => {
      state.totalItems = action.payload;
    },
  },
});

export const { setPage, setItemsPerPage, setTotalItems } = paginationSlice.actions;
export default paginationSlice.reducer;