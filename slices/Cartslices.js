import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload); // ✅ Corrected spelling: AddtoCart → addToCart
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex !== -1) {
        state.items.splice(itemIndex, 1); // ✅ Corrected spelling: RemoveFromCart → removeFromCart
      } else {
        console.log("Can't remove an item that was not added to cart!");
      }
    },
    emptyCart: (state) => {
      state.items = []; // ✅ Corrected spelling: EmptyCart → emptyCart
    },
  },
});

// Action creators
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

// Selectors
export const selectCartItems = state => state.cart.items;
export const selectCartItemById = (state, id) => state.cart.items.filter(item => item.id === id);
export const selectCartTotal = state => state.cart.items.reduce((total, item) => total + item.price, 0);

// Export reducer
export default cartSlice.reducer;
