import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  categorys: {
    category: {
      categoryName: "всё", //choose category for view source
      categoryId: "-1" //choose category for request to DB
    },
    typeCategory: {
      categoryName: "ингридиенты", //choose category for view source
      categoryPathName: "prod" //choose category for request to DB
    }
  },
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addCategory : (state, action) => {
      state.categorys = action.payload;
    }
  },
})

export const { addCategory } = filterSlice.actions;
export const filterState = ((state: RootState) => state.filter.categorys);
export default filterSlice.reducer;