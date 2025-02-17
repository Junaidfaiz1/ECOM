import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalprice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }

      state.totalprice += product.price;
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;
      const existingProduct = state.cart.find(
        (productInCart) => productInCart.id === productId
      );

      if (existingProduct) {
        if(existingProduct.quantity>1){
          state.totalprice -=existingProduct.price;
          state.cart =state.cart.map((product)=>{
            product.id ===productId? { ...product, quantity: product.quantity - 1 } : product 
          })
        }else{
        state.totalprice -= existingProduct.price * existingProduct.quantity;
        state.cart = state.cart.filter((item) => item.id !== productId);
        }}
    },

    cleanCart: (state) => {
      state.cart = [];
      state.totalprice = 0;
    },
  },
});

export const { cleanCart, addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
