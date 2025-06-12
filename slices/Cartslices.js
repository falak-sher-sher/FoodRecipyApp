import { createSlice } from '@reduxjs/toolkit'




const initialState = {
  items:[],
}

export const Cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    
    AddtoCart: (state, action) => {
      state.items=[...state.items,action.payload]
    },
    RemoveFromCart: (state, action) => {
      let newCart = [...state.items];
      let itemIndex = state.items.findIndex(item=> item.id==action.payload.id);
      if(itemIndex>=0){
        newCart.splice(itemIndex,1)[]
      }else{
        console.log('cont remove the item that is not added to cart!');

      }
      state.items=newCart;
    },
    EmptyCart: (state, action) => {
      state.items=[];
    },
  },
})

// Action creators are generated for each case reducer function
export const {AddtoCart,RemoveFromCart,EmptyCart } = Cart.actions
export const selectCartItems = state=> state.action.items;
export const selectCartItemById= (state,id)=> state.cart.items.filter(item=> item.id==id);
export const selectCartTotal = state=> state.cart.items.reduce((total,item)=> total=total+item.price,0)
export default Cart.reducer