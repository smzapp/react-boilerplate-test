import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    currentUser: null,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.currentUser = action.payload;
    },
    logout: (state, action) => {
      state.isAuthenticated = false;
      state.currentUser = null;
    },
  }
});

export const {
  login,
  logout
} = authSlice.actions;

export default authSlice.reducer;