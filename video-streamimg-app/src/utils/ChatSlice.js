import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.unshift(action.payload);
    },
  },
});

export const { addMessage } = ChatSlice.actions;
export default ChatSlice.reducer;
