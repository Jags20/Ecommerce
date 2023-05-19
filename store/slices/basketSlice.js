import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: "basket",
    initialState: [],
    reducers: {
        // what action do we need in our app
        // addToBasket(state,action) {
        //   // let payload = action.payload;
        //   state.push(action.payload);
        // },
        addToBasket(state, action) {
          const product = action.payload;
          const existingProduct = state.find(item => item.id === product.id);
          if (existingProduct) {
            // If the product already exists, update its quantity
            existingProduct.quantity += 1;
          } else {
            // If the product doesn't exist, add it to the basket
            state.push({ ...product, quantity: 1 });
          }
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