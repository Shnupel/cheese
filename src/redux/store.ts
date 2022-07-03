import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slises/ProductsSlise';
import FilterSlice from './slises/FilterSlice';
import BasketSlice from './slises/BasketSlice';

export const store = configureStore({
  reducer: {
    product: productSlice,
    filter: FilterSlice,
    basket: BasketSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;