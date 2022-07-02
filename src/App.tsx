import React from 'react';
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import { RootState, AppDispatch } from './redux/store';
import { fetchProducts } from "./redux/slises/ProductSlise";
import WrapperComponent from './components/WrapperComponent';
import CartPage from './pages/cartPage/CartPage';
import CategoryPage from './pages/categoryPage/CategoryPage';
import HomePage from './pages/homePage';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

function App() {
  const dispatch = useAppDispatch();
  const { categorys } = useAppSelector((state) => state.filter);
  const category = categorys.category.categoryId !== "-1" ? `category=${ categorys.category.categoryId }` : "";
  const pathname = categorys.typeCategory.categoryPathName;
  React.useEffect(() => {
    dispatch(fetchProducts({ category, pathname }));
  }, [categorys]);

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={ <WrapperComponent /> }>
          <Route index element={ <HomePage /> } />
          <Route path='/cartPage/:id' element={ <CartPage /> } />
          <Route path='/categoryPage' element={ <CategoryPage /> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
