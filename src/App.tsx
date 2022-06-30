import React from 'react';
import { fetchProducts } from './redux/slises/ProductSlise';
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import { RootState, AppDispatch } from './redux/store';
import CartPage from './pages/cartPage/CartPage';
import CategoryPage from './pages/categoryPage/CategoryPage';
import HomePage from './pages/homePage';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

function App() {
  return (
    <div className="app">
      <HomePage />
      {/* <CartPage /> */}
      {/* <CategoryPage /> */}
    </div>
  );
}

export default App;
