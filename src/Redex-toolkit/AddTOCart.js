import { Favorite } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalprice: 0,
  Favourites: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProduct !== -1) {
        state.cart[existingProduct] = {
          ...state.cart[existingProduct],
          quantity: state.cart[existingProduct].quantity + 1,
        };
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

      if (existingProduct.quantity > 1) {
        state.totalprice -= existingProduct.price;
        state.cart = state.cart.map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        );
      } else {
        state.totalprice -= existingProduct.price * existingProduct.quantity;
        state.cart = state.cart.filter((item) => item.id !== productId);
      }
    },

    cleanCart: (state) => {
      state.cart = [];
      state.totalprice = 0;
    },

    toggleFavourite: (state, action) => {
      const favouriteProduct = action.payload;
      const existingFavourite = state.Favourites.findIndex(
        (item) => item.id == favouriteProduct.id
      );

      if (existingFavourite === -1) {
        state.Favourites.push(favouriteProduct);
      } else {
        const removeFavouriteItem = state.Favourites.filter(
          (f) => f.id !== action.payload.id
        );
        state.Favourites = removeFavouriteItem;
      }
    },
  },
});

export const { cleanCart, addToCart, removeFromCart, toggleFavourite } =
  cartSlice.actions;
export default cartSlice.reducer;
