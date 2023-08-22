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
    toggle: (state, action) => {
      if (action.payload) {
        state.search = action.payload;
      } else {
        state.search = !state.search;
      }
    },

    changeValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { toggle, changeValue } = searchSlice.actions;

export const useSearchOpen = () =>
  useSelector((state: RootState) => state.search.search);

export const useSearchInputValue = () =>
  useSelector((state: RootState) => state.search.value);
