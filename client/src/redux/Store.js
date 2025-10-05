import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Sliece.jsx"; 
import categorySlice from "./CategorySlice.jsx"
import searchSlice from "./SearchSlice.jsx"
import Auth from './AuthSlice.jsx'


const store = configureStore({
  reducer: {
    cart: cartReducer, 
    category: categorySlice,
    search: searchSlice,
    auth: Auth,
 
    
    
  },
});

export default store;