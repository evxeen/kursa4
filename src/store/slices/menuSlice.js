import {createSlice} from "@reduxjs/toolkit";

const initialState = {
   activeMenuElement: {name: 'Каталог', path: '/'},
   activeCart: false
};

export const menuSlice = createSlice({
   name: 'menu',
   initialState,
   reducers: {
      selectMenuElement: (state, action) => {
         state.activeMenuElement = action.payload;
         state.activeCart = false;
      },
      selectCart: (state, action) => {
         state.activeCart = action.payload;
         state.activeMenuElement = '';
      }
   }
});

export const {selectMenuElement, selectCart} = menuSlice.actions;
export default menuSlice.reducer;
