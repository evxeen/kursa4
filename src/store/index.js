import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./slices/menuSlice";
import productsSlice from "./slices/productsSlice";

export const store = configureStore({
  reducer: {
    menuSlice,
    productsSlice,
  },
});
