import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
// Types
import { RootState } from '/src/shared/types';
import { useRouter } from 'next/router';

const searchState = () => {
  const router = window.location;
  const searchingPage = router.pathname === '/search';
  return searchingPage;
};

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    search: false,
    value: '',
  },
  reducers: {
    searching: (state, action) => {
      state.search = action.payload;
    },

    changeValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { searching, changeValue } = searchSlice.actions;

export const useSearchOpen = () =>
  useSelector((state: RootState) => state.search.search);

export const useSearchInputValue = () =>
  useSelector((state: RootState) => state.search.value);
