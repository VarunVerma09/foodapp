import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";


const searchSlice = createSlice({
    name : "search",
    initialState:{
        search:"",
        
    },
    reducers:{
        searchItems: (state, action)=>{
            state.search = action.payload;
        }
    }
})

export const {searchItems}= searchSlice.actions;

export default searchSlice.reducer;