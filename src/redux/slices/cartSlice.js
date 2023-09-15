import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  favori: [],
  events: [],
  cartCount: 0,
  totalPrice: 0,
  counter: 1,
};

const checkSavedFavorite = () => {
  const saved = JSON.parse(localStorage.getItem("favoriteList"));
  if (saved !== null) {
    initialState.favori = saved;
  } else {
    initialState.favori = [];
  }
};
checkSavedFavorite()

const cartSlice = createSlice({
  name: "cartData",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.counter += 1;
    },
    decrement: (state, action) => {
      if (state.counter > 0) {
        state.counter -= 1;
      }
    },
    addToCart: (state, action) => {
      const newTicket = action.payload;
      const existingTicket = state.cart.find(
        (item) => item.id === newTicket.id
      );

      if (state.counter > 0) {
        if (existingTicket) {
          existingTicket.quantity += state.counter;
        } else {
          state.cart.push({
            ...newTicket,
            quantity: state.counter,
          });
        }

        state.cartCount = state.cart.reduce(
          (count, item) => count + item.quantity,
          0
        );
        state.totalPrice = state.cart.reduce(
          (total, item) => total + Number(item.minimumPrice) * item.quantity,
          0
        );
      }
      state.counter = 0;
    },
    adToFavori: (state, action) => {
      const newFavoriCard = action.payload;
      const existingFavoriCardIndex = state.favori.findIndex(
        (favoriItem) => favoriItem.id === newFavoriCard.id
      );
      if (existingFavoriCardIndex === -1) {
        state.favori.push(newFavoriCard);
      }else{
        const uptateFavori=state.favori.filter((item)=>item.id!==newFavoriCard.id)
        state.favori=uptateFavori
      }
      localStorage.setItem("favoriteList", JSON.stringify(state.favori));
    },
    removeFromCart: (state, action) => {
      const cardId = action.payload;
      const updatedCart = state.cart.filter((item) => item.id !== cardId);
      state.cart = updatedCart;
    },
    allRemoveFromCart: (state, action) => {
      state.cart = [];
    },
    cartTotal: (state, action) => {
      let count = state.cart.map((item) => item.quantitiy);
      let sum = count.reduce((acc, curr) => acc + curr, 0);
      state.cartCount = sum;
    },
    cartTotalPrice: (state, action) => {
      let count = state.cart.map(
        (item) => item.quantitiy * Number(item.minimumPrice)
      );
      let total = count.reduce((acc, curr) => acc + curr, 0);
      state.totalPrice = total;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  cartTotal,
  increment,
  decrement,
  cartTotalPrice,
  adToFavori,
  allRemoveFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
