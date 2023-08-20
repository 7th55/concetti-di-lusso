import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
// Types
import { RootState } from '/src/shared/types';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    search: false,
    value: '',
  },
  reducers: {
    toggle: (state) => {
      state.search = !state.search;
    },

    changeValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { toggle, changeValue } = searchSlice.actions;

export const searchOpen = () =>
  useSelector((state: RootState) => state.search.search);

export const searchInputValue = () =>
  useSelector((state: RootState) => state.search.value);
