import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        additem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItems: (state, action) => {
            // const index = state.items.findIndex(item => item.id === action.payload)
            // state.items.splice(index, 1);
            state.items.pop();
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
})

export const {additem, removeitem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;