import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    toggleMenuSlice: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.toggleMenuSlice = !state.toggleMenuSlice;
    },
    closeMenu: (state) => {
      state.toggleMenuSlice = false;
    },
  },
});

export const { toggleMenu, closeMenu } = toggleSlice.actions;
export default toggleSlice.reducer;
