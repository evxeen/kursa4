import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeFilterElement: 0,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    selectFilterElement: (state, action) => {
      state.activeFilterElement = action.payload;
    },
  },
});

export const { selectFilterElement } = filterSlice.actions;
export default filterSlice.reducer;
