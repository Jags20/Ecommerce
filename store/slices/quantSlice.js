import { createSlice } from "@reduxjs/toolkit";

const quantSlice = createSlice({
    name: "quantity",
    initialState: 0,
    reducers: {
        increase(state,action) {
            return (state - 1);
        },
        decrease(state,action) {
            return (state + 1);
        }
    }
});

export default quantSlice.reducer;
export const {increase, decrease } = quantSlice.actions;
