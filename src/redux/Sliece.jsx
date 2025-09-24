import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find((item)=>item.id === action.payload.id);
      if(existingItem){
       state.cart=  state.cart.map((item)=> item.id === action.payload.id ? {...item, Qty: item.Qty +1}:item)
      } else {
   
        state.cart.push(action.payload);
   
  }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
    },
    increment: (state, action) => {
      const item = state.cart.find(i => i.id === action.payload.id);
      if (item) item.Qty += 1;
    },
    decrement: (state, action) => {
      const item = state.cart.find(i => i.id === action.payload.id);
      if (item && item.Qty > 1) item.Qty -= 1;
    },
  },

});

export const { addToCart, removeFromCart,increment,decrement } = cartSlice.actions;


export default cartSlice.reducer;
