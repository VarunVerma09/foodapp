import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Sliece.jsx"; 
import categorySlice from "./CategorySlice.jsx"

const store = configureStore({
  reducer: {
    cart: cartReducer, 
    category: categorySlice,
  },
});

export default store;