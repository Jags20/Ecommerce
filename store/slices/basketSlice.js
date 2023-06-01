import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: "basket",
    initialState: [],
    reducers: {
        // what action do we need in our app
        addToBasket(state, action) {
          // console.log(action);
          const product = action.payload;
          // console.log(product);
          const existingProduct = state.find( (item) => item.id === product.id);
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
        },

        increase(state,action)  {
          const productId = action.payload;
          const existingProduct = state.find(item => item.id === productId);
          if (existingProduct) {
            // If the product already exists, update its quantity
            existingProduct.quantity += 1;
          }
      },

      decrease(state,action) {
        const productId = action.payload;
        // console.log(productId);
        const existingProduct = state.find(item => item.id === productId);
        if (existingProduct.quantity > 1) {
          // If the product already exists, update its quantity
          existingProduct.quantity -= 1;
        } else {
          state.splice(existingProduct, 1);
        }
      },
    }
    
});

// console.log(basketSlice.actions);

export default basketSlice.reducer;
export const { addToBasket, removeFromBasket, clearAllUser, increase, decrease } = basketSlice.actions;