import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
// Types
import { RootState } from '/src/shared/types';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searching: false,
    value: '',
  },
  reducers: {
    searching: (state, action) => {
      state.searching = action.payload;
    },

    changeValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { searching, changeValue } = searchSlice.actions;

export const useSearchState = () =>
  useSelector((state: RootState) => state.search.searching);

export const useSearchInputValue = () =>
  useSelector((state: RootState) => state.search.value);
