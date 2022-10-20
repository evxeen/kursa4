import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCart: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    selectCart: (state, action) => {
      state.activeCart = action.payload;
    },
  },
});

export const { selectCart } = menuSlice.actions;
export default menuSlice.reducer;
