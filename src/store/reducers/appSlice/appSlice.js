import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setMovies(state, { payload }) {
      state.movies = payload;
    },
    setPageNumber(state, { payload }) {
      state.page = payload;
    },
    setQuery(state, { payload }) {
      state.query = payload;
    }
  }
});

export const {
  setMovies,
  setPageNumber,
  setQuery
} = appSlice.actions;

export default appSlice.reducer;
