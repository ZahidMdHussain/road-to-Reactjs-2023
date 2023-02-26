import { createSlice } from "@reduxjs/toolkit";

const SearchCache = createSlice({
  name: "CacheSerach",
  initialState: {},
  reducers: {
    storeCache: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { storeCache } = SearchCache.actions;
export default SearchCache.reducer;
