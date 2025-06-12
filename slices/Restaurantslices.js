import { createSlice } from '@reduxjs/toolkit'




const initialState = {
  restaurant: null
}

export const Restaurant = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    
    SetRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const {SetRestaurant } = Restaurant.actions
export const selectRestaurant= state=> state.restaurant.restaurant;
export default Restaurant.reducer