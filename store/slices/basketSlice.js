import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: "basket",
    initialState: [],
    reducers: {
        // what action do we need in our app
        addToBasket(state,action) {
          // let payload = action.payload;
          state.push(action.payload);
        },
        removeFromBasket(state,action) {
          state.splice(action.payload, 1);
        },
        clearAllUser(state,action){
          return[];
        }
    }
    
});

// console.log(basketSlice.actions);

export default basketSlice.reducer;
export const { addToBasket, removeFromBasket, clearAllUser } = basketSlice.actions;