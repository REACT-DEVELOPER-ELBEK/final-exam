"use client"
import { combineReducers } from '@reduxjs/toolkit';
import paginationReducer from '../slices/paginationSlice';

export const rootReducer = combineReducers({
  pagination: paginationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;