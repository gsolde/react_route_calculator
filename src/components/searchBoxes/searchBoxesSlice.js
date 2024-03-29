import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const searchBoxesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    addOrigin: (state, action) => {
      state.origin = action.payload;
    },
    addDestination: (state, action) => {
      state.destination = action.payload;
    },
    resetPlacesState: (state) => initialState,
  },
});

export const selectOrigin = (state) => state.places.origin;
export const selectDestination = (state) => state.places.destination;

export const { addOrigin, addDestination, resetPlacesState } = searchBoxesSlice.actions;

export default searchBoxesSlice.reducer;
