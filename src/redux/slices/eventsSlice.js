import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//? Helper function to delay the API request
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//? Get Events
export const getEvents = createAsyncThunk("getEvents", async () => {
  await delay(3000);
  const res = await axios.get(process.env.REACT_APP_ALL_EVENTS);
  return res.data;
});

const initialState = {
  events: [],
  loading: false,
  error: "",
};

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEvents.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getEvents.fulfilled, (state, action) => {
      state.events = action.payload;
      state.loading = false;
    });
    builder.addCase(getEvents.rejected, (state) => {
      state.error = "Error 500";
      state.loading = false;
    });
  },
});

export default eventSlice.reducer;
