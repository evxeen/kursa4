import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cartList.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.cartList = state.cartList.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
