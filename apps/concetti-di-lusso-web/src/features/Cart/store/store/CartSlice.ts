import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
// Types
import { RootState } from '/src/shared/types';
import { ProductFromCart } from '/src/shared/types/RootState';

type CartInitialState = {
  items: Array<ProductFromCart>;
};


const initialState: CartInitialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex((i) => i.name === action.payload);
      const increaseCount = index !== -1;

      if (increaseCount) {
        state.items[index] = {
          name: state.items[index].name,
          count: state.items[index].count + 1,
        };
      } else {
        state.items = [...state.items, { name: action.payload, count: 1 }];
      }
    },
    removeItemToCart: (state, action) => {
      state.items = state.items.filter((item) => item !== action.payload);
    },
  },
});

export const { addItemToCart, removeItemToCart } = cartSlice.actions;

export const useCartItem = () =>
  useSelector((state: RootState) => state.cart.items);
