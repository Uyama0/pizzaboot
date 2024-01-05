import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cartSlice";
import locationReducer from "../reducers/locationSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    location: locationReducer,
  },
});

export default store;
