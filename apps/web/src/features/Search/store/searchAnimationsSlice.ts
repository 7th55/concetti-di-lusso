import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
// Types
import { RootState } from '/src/shared/types';

export const searchAnimationsSlice = createSlice({
  name: 'searchAnimations',
  initialState: {
    input: { close: false },
  },
  reducers: {
    toggleClose: (state) => {
      state.input.close = !state.input.close;
    },
  },
});

export const { toggleClose } = searchAnimationsSlice.actions;

export const searchAnimationsInput = () =>
  useSelector((state: RootState) => state.searchAnimations.input);

