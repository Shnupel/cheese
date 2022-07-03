import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const initialCategorys = {
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
  product: "-1"
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialCategorys,
  reducers: {
    addCategory : (state, action) => {
      state.categorys = action.payload;
    },
    addNewCategoryId: (state, action) => {
      state.categorys.category.categoryId = `${ state.categorys.category.categoryId }|${ action.payload }`;
    },
    deleteOldCategoryId: (state, action) => {
      state.categorys.category.categoryId = state.categorys.category.categoryId.replace(`|${ action.payload }`, "");
    }
  },
})

export const { addCategory, addNewCategoryId, deleteOldCategoryId } = filterSlice.actions;
export const filterState = ((state: RootState) => state.filter.categorys);
export const openningProduct = ((state: RootState) => state.filter.product);
export default filterSlice.reducer;