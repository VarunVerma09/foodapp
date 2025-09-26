import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],       
  currentUser: null, 
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (state, action) => {
      const { username, email, password } = action.payload;
        state.users.push({ username, email, password });
    
    },

    login: (state, action) => {
      const { email, password } = action.payload;
    
      const foundUser = state.users.find(
        (user) =>
          user.email.toLowerCase().trim() === email.toLowerCase().trim() &&
          user.password.trim() === password.trim()
         
          
      );
       

      if (foundUser) {
        state.currentUser = foundUser; // ✅ successful login
      } else {
        state.currentUser = null; // ❌ wrong details
      }
    },

    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { register, login, logout } = userSlice.actions;
export default userSlice.reducer;
