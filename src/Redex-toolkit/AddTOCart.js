import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    cart: [],
    totalprice: 0
  }


  export const counterSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
     cartslice: (state, action)=>{

     }
    },
  })
  