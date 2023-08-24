import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
// Types
import { RootState } from '/src/shared/types';

export const searchAnimationsSlice = createSlice({
  name: 'searchAnimations',
  initialState: {
    input: { animationRun: false },
  },
  reducers: {
    inputAnimationRun: (state, actions) => {
      state.input.animationRun = actions.payload;
    },
  },
});

export const { inputAnimationRun } = searchAnimationsSlice.actions;

export const useSearchAnimationsInput = () =>
  useSelector((state: RootState) => state.searchAnimations.input);
