import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./slices/basketSlice";
import quantSlice from "./slices/quantSlice";

const store = configureStore({
    reducer:{
        basket:basketSlice,
        quantity:quantSlice,
    },
});

export default store;