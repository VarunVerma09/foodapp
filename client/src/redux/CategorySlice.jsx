import { createSlice } from "@reduxjs/toolkit";
import reducer from "./Sliece";

const CategorySlice = createSlice({
    name : "category",
    initialState: {
        category: "All",
        
    },
    reducers: { 
        setCategory: (state, action) => {
            state.category = action.payload;
        },
    }
})
export const {setCategory} = CategorySlice.actions;
export default CategorySlice.reducer;