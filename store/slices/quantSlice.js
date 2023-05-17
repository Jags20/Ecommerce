import { createSlice } from "@reduxjs/toolkit";

const quantSlice = createSlice({
    name: "quantity",
    initialState: {},
    reducers: {
        // increase(state,action)  {
        //     return (state - 1);
        // },
        // decrease(state,action) {
        //     return (state + 1);
        // }
        increase(state,action)  {
            const {payload:itemId} = action;
            state[itemId] = (state[itemId] || 0) +1;
        },
        decrease(state,action) {
            const {payload:itemId} = action;
            if (state[itemId] && state[itemId] > 0) {
                state[itemId] -= 1;
            }
        },
    }
});

    export default quantSlice.reducer;
    export const {increase, decrease } = quantSlice.actions;


// import { createSlice } from "@reduxjs/toolkit";

// const quantSlice = createSlice({
//   name: "quant",
//   initialState: {},
//   reducers: {
//     increase: (state, action) => {
//       const { payload: itemId } = action;
//       state[itemId] = (state[itemId] || 0) + 1;
//     },
//     decrease: (state, action) => {
//       const { payload: itemId } = action;
//       if (state[itemId] && state[itemId] > 0) {
//         state[itemId] -= 1;
//       }
//     },
//   },
// });

// export const { increase, decrease } = quantSlice.actions;

// export default quantSlice.reducer;
