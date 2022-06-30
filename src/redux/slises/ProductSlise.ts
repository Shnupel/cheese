import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { ICartProduct } from '../../types/types';

interface CounterState {
  Products: ICartProduct[],
  loadingStatus: string
}

enum loadingStatus {
  SUCCES = "success",
  ERROR = "error",
  LOADING = "loading",
}

const initialState: CounterState = {
  Products: [],
  loadingStatus: loadingStatus.LOADING
}

export const fetchProducts = createAsyncThunk('users/fetchProducts',  async () => {
  const { data } = await axios.get<ICartProduct[]>("https://62b717d3491a19c97aee79aa.mockapi.io/prod");
  console.log("r");
  return data;
})

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.Products = [];
      state.loadingStatus = loadingStatus.LOADING;
      console.log("loading");
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.Products = [...action.payload];
      state.loadingStatus = loadingStatus.SUCCES;
      console.log("succes");
    })
    builder.addCase(fetchProducts.rejected, (state) => {
      state.Products = [];
      state.loadingStatus = loadingStatus.ERROR;
      console.log("error");
    })
  }
})

export default productSlice.reducer;