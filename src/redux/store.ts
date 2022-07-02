import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slises/ProductSlise';
import FilterSlice from './slises/FilterSlice';

export const store = configureStore({
  reducer: {
    product: productSlice,
    filter: FilterSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;