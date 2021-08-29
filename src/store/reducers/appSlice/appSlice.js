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
    },
    setMovieDetails(state, { payload }) {
      state.movieDetails = payload;
    }
  }
});

export const {
  setMovies,
  setPageNumber,
  setQuery,
  setMovieDetails
} = appSlice.actions;

export default appSlice.reducer;
