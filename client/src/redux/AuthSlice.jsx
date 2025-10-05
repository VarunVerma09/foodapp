import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isLoggedIn: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload; // backend user
      state.isLoggedIn = true;
      localStorage.setItem("user", JSON.stringify(action.payload)); // optional: persist
    },
    logout: (state) => {
      state.currentUser = null;
      state.isLoggedIn = false;
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
