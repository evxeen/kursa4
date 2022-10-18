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
    plusOne: (state, action) => {
      const findItem = state.cartList.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count++;
      } else {
        state.cartList.push({
          ...action.payload,
          count: 1,
        });
      }
    },
    minusOne: (state, action) => {
      const findItem = state.cartList.find((obj) => obj.id === action.payload);

      if (findItem.count === 1) {
        return;
      }

      if (findItem) {
        findItem.count--;
      }
    },
  },
});

export const { addProduct, removeProduct, plusOne, minusOne } =
  cartSlice.actions;
export default cartSlice.reducer;
