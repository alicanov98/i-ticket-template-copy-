import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cart: [],
  events:[],
  cartCount: 0,
};

const cartSlice = createSlice({
  name: "cartData",
  initialState,
  reducers: {
    eventData: (state) => {
      axios
        .get(process.env.REACT_APP_ALL_EVENTS)
        .then((res) => {
          state.events = res;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addToCart: (state, action) => {

    },
    removeFromCart: (state, action) => {},
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
