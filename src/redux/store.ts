"use client"
import { configureStore } from '@reduxjs/toolkit'
import foodSlicer from './slices/foodSlicer'
import { rootReducer } from './reducer/rootReducer'

export const store = configureStore({
  reducer: {
    foods: foodSlicer,
    reducer: rootReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch