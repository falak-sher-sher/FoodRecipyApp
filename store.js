import { configureStore } from '@reduxjs/toolkit'
import  Cart  from './slices/Cartslices'
import  Restaurant  from './slices/Restaurantslices'

export const store = configureStore({
  reducer: {
  cart:Cart,
  restaurant:Restaurant

  },
})