import { configureStore } from '@reduxjs/toolkit';
import searchInputReducer from '/src/features/Search/store/searchSlice';

export const store = configureStore({
  reducer: {
    search: searchInputReducer,
  },
});
