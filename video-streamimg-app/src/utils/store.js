import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggleSlice";
import SearchCache from "./SearchCache";
const store = configureStore({
  reducer: {
    toggle: toggleSlice,
    CacheSerach: SearchCache,
  },
});

export default store;
