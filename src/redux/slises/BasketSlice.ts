import { createSlice } from "@reduxjs/toolkit";
import { ICartProduct } from "../../types/types";

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

    }
  }
})

export const { addCart } = basketSlice.actions;
export default basketSlice.reducer;