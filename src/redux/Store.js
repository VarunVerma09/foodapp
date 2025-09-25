import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Sliece.jsx"; 
import categorySlice from "./CategorySlice.jsx"
import searchSlice from "./SearchSlice.jsx"

const store = configureStore({
  reducer: {
    cart: cartReducer, 
    category: categorySlice,
    search: searchSlice,
    
  },
});

export default store;