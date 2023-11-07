import { configureStore } from '@reduxjs/toolkit'
import foodSlicer from './slices/foodSlicer'

export const store = configureStore({
  reducer: {
    foods: foodSlicer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch