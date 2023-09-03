import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  popular: [],
  veggie: [],
  foodDetail: {},
  error: null
}

export const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    getTopFoodsStart: state => {
      state.isLoading = true
    },
    getPopularSuccess: (state, action) => {
      state.isLoading = false
      state.popular = action.payload
    },
    getVeggieSuccess: (state, action) => {
      state.isLoading = false
      state.veggie = action.payload
    },
    getFoodDetailSuccess: (state, action) => {
      state.isLoading = false
      state.foodDetail = action.payload
    },
    getTopFoodsFailure: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

export const {getTopFoodsStart, getPopularSuccess, getVeggieSuccess, getTopFoodsFailure, getFoodDetailSuccess} = foodSlice.actions
export default foodSlice.reducer