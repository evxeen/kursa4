import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./slices/menuSlice";
import productsSlice from "./slices/productsSlice";
import filterSlice from "./slices/filterSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    menuSlice,
    productsSlice,
    filterSlice,
    cartSlice,
  },
});
