import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
// Types
import { RootState } from '/src/shared/types';

type FavoritesInitialState = {
  items: Array<{ name: string }>;
};

const initialState: FavoritesInitialState = {
  items: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<{ name: string }>) => {
      const { name } = action.payload;
      const index = state.items.findIndex((i) => i.name === name);
      const addProduct = index === -1;

      if (addProduct) {
        state.items = [...state.items, { name }];
      }
    },
    removeFromFavorites: (
      state,
      action: PayloadAction<{
        name: string;
      }>
    ) => {
      const { name } = action.payload;
      const index = state.items.findIndex((i) => i.name === name);
      const removeProduct = index !== -1;

      if (removeProduct) {
        state.items = state.items.filter((item) => item.name !== name);
      }
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export const useFavorites = () =>
  useSelector((state: RootState) => state.favorites);
