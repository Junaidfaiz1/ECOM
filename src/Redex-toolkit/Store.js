import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./AddTOCart"
export const Store = configureStore({
  reducer: {
   cart: cartReducer,
  },
})

export default Store;