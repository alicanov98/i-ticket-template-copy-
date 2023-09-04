import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "./slices/cartSlice";
import counterReducer from "./slices/counterSlice"


export const store = configureStore({
  reducer: {
    // cartData: cartSlice,
    counter:counterReducer,
    counter1:counterReducer,
    counter2:counterReducer,
  },
});
