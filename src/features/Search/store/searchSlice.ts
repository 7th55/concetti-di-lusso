import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
// Types
import { RootState } from '/src/shared/types';

export const searchSlice = createSlice({
  name: 'searchInput',
  initialState: {
    value: '',
  },
  reducers: {
    changeValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeValue } = searchSlice.actions;

export const searchInputValue = () =>
  useSelector((state: RootState) => state.search.value);
export default searchSlice.reducer;
