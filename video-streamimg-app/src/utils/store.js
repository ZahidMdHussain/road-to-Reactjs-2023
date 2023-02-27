import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggleSlice";
import SearchCache from "./SearchCache";
import ChatSlice from "./ChatSlice";
const store = configureStore({
  reducer: {
    toggle: toggleSlice,
    CacheSerach: SearchCache,
    chat: ChatSlice,
  },
});

export default store;
