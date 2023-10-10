import { configureStore } from "@reduxjs/toolkit";

//? Slices
import cartSlice from "./slices/cartSlice";
import eventsSlice from "./slices/eventsSlice";

export const store = configureStore({
  reducer: {
    cartData: cartSlice,
    events: eventsSlice,
  },
});
