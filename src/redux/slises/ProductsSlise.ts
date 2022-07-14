import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICartProduct } from '../../types/types';
import { RootState } from '../store';

interface CounterState {
  Products: ICartProduct[],
  loadingStatus: string,
}

export enum loadingStatus {
  SUCCES = "success",
  ERROR = "error",
  LOADING = "loading",
}

const initialState: CounterState = {
  Products: [],
  loadingStatus: loadingStatus.LOADING,
}

export const fetchProducts = createAsyncThunk('users/fetchProducts',  async(categorys: { category: string, pathname: string }) => {
  const getCategory = categorys.category !== "-1" ? `category=${ categorys.category }` : "";
  const { data } = await axios.get<ICartProduct[]>(`https://62b717d3491a19c97aee79aa.mockapi.io/${ categorys.pathname }?&${ getCategory }`);
  return data;
});

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.Products = [];
      state.loadingStatus = loadingStatus.LOADING;
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.Products = [...action.payload];
      state.loadingStatus = loadingStatus.SUCCES;
    })
    builder.addCase(fetchProducts.rejected, (state) => {
      state.Products = [];
      state.loadingStatus = loadingStatus.ERROR;
    })
  }
});

export const loadingData = ((state: RootState) => state.product.loadingStatus);
export default productSlice.reducer;