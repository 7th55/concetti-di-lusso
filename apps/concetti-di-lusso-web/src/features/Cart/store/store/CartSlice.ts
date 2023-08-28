import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
// Types
import { RootState } from '/src/shared/types';
import { ProductFromCart } from '/src/shared/types/RootState';

const increaseCount = (state: CartInitialState, index: number) =>
  state.items[index].count + 1;

const getTotalPrice = (products: Array<ProductFromCart>) =>
  products.reduce(
    (totalPrice, product) => totalPrice + Number(product.price),
    0
  );

const totalPriceOfProduct = (
  price: number,
  state: CartInitialState,
  index: number
) => Number(price) * (state.items[index].count + 1);
type CartInitialState = {
  items: Array<ProductFromCart>;
  totalPrice: number;
};

const initialState: CartInitialState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (
      state,
      action: PayloadAction<{
        name: string;
        price: number;
      }>
    ) => {
      const { name, price } = action.payload;
      const index = state.items.findIndex((i) => i.name === name);
      const findProduct = index !== -1;

      if (findProduct) {
        state.items[index] = {
          name,
          count: increaseCount(state, index),
          price: totalPriceOfProduct(price, state, index),
        };

        state.totalPrice = getTotalPrice(state.items);
      } else {
        state.items = [
          ...state.items,
          { name, count: 1, price: Number(price) },
        ];
        state.totalPrice = getTotalPrice(state.items);
      }
    },
    removeItemFromCart: (
      state,
      action: PayloadAction<{
        name: string;
        price: number;
      }>
    ) => {
      const { name, price } = action.payload;
      const index = state.items.findIndex((i) => i.name === name);
      const findProduct = index !== -1;

      if (state.items[index].count === 1) {
        state.items = state.items.filter((item) => item.name !== name);
        state.totalPrice = getTotalPrice(state.items);
      } else if (findProduct) {
        state.items[index] = {
          name,
          count: state.items[index].count - 1,
          price: state.items[index].price - price,
        };

        state.totalPrice = getTotalPrice(state.items);
      }
    },
    deleteItemFromCart: (state, action) => {
      const { name } = action.payload;
      state.items = state.items.filter((item) => item.name !== name);

      state.totalPrice = getTotalPrice(state.items);
      console.log(state.items, name);
    },
  },
});

export const { addItemToCart, deleteItemFromCart, removeItemFromCart } =
  cartSlice.actions;

export const useCartItem = () =>
  useSelector((state: RootState) => state.cart.items);

export const useCart = () => useSelector((state: RootState) => state.cart);
