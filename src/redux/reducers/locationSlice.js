import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    choosenLocation: "Choose your location",
  },
  reducers: {
    setChoosenLocation: (state, action) => {
      state.choosenLocation = action.payload;
    },
  },
});

export const { setChoosenLocation } = locationSlice.actions;

export const selectChoosenLocation = (state) => state.location.choosenLocation;

export default locationSlice.reducer;
