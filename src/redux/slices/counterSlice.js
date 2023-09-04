import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: 0,
  };
  
  const initialState1 = {
    value: 0,
  };
  
  const initialState2 = {
    value: 0,
  };


export const counterSlice = createSlice({
  name: "counter",
  initialState, 
  reducers: {
    incrementCounter: (state) => { 
      state.value += 1; 
    },
    decrementCounter: (state) => { 
      if (state.value > 0) {
        state.value -= 1;
      }
    },
  },
});

export const { incrementCounter, decrementCounter } = counterSlice.actions;


export const counter1Slice = createSlice({
  name: "counter1",
  initialState1, 
  reducers: {
    incrementCounter1: (state) => { 
      state.value += 1; 
    },
    decrementCounter1: (state) => { 
      if (state.value > 0) {
        state.value -= 1;
      }
    },
  },
});

export const { incrementCounter1, decrementCounter1 } = counter1Slice.actions;


export const counter2Slice = createSlice({
  name: "counter2",
  initialState2, 
  reducers: {
    incrementCounter2: (state) => { 
      state.value += 1; 
    },
    decrementCounter2: (state) => { 
      if (state.value > 0) {
        state.value -= 1;
      }
    },
  },
});

export const { incrementCounter2, decrementCounter2 } = counter2Slice.actions;


export default counterSlice.reducer;