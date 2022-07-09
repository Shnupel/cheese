import { createSlice } from "@reduxjs/toolkit";
import { ICartProduct } from "../../types/types";
import { RootState } from "../store";

interface IState {
  basket: ICartProduct[]
}

const initialState: IState = {
  basket: []
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const prodId = state.basket.findIndex(_basket => _basket.id === action.payload.id);
      if(prodId !== -1){
        state.basket[prodId].counter += 1;
      }else{
        state.basket.push(action.payload);
      }
    },
    decrementCart: (state, action) => {
      const prodId = state.basket.findIndex(_basket => _basket.id === action.payload.id);
      if(prodId !== -1){
        state.basket[prodId].counter -= 1;
        if(state.basket[prodId].counter === 0){
          state.basket = state.basket.filter(_basket => _basket.id !== action.payload.id);
        }
      }
    }
  }
})

export const { addCart, decrementCart } = basketSlice.actions;
export const basketSliceSource = ((state: RootState) => state.basket.basket);
export default basketSlice.reducer;