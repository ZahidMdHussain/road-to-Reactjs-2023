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
  },
});

export const { toggleMenu } = toggleSlice.actions;
export default toggleSlice.reducer;
