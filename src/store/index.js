import { configureStore } from "@reduxjs/toolkit";
import FoodReducer from '../slice/food'

export default configureStore({
  reducer: {
    food: FoodReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
})