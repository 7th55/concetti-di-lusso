import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
// Types
import { RootState } from '/src/shared/types';

type CartInitialState = {
  items: Array<string>;
};

const initialState: CartInitialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<string>) => {
      state.items.push(action.payload);
    },
    removeItemToCart: (state, action) => {
      state.items = state.items.filter((item) => item !== action.payload);
    },
  },
});

export const { addItemToCart, removeItemToCart } = cartSlice.actions;

export const useCartItem = () =>
  useSelector((state: RootState) => state.cart.items);
