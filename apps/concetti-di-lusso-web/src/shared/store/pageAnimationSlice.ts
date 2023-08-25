import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
// Types
import { RootState } from '/src/shared/types';

export const pageAnimationsSlice = createSlice({
  name: 'pageAnimations',
  initialState: {
    page: { animationRun: false },
  },
  reducers: {
    animationRunPageAnimation: (state, actions) => {
      state.page.animationRun = actions.payload;
    },
  },
});

export const { animationRunPageAnimation } = pageAnimationsSlice.actions;

export const usePageAnimationsPage = () =>
  useSelector((state: RootState) => state.pageAnimations.page);
