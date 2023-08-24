import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
// Slices
import { searchSlice } from '/src/features/Search';
import { searchApi } from '/src/features/Search';
import { searchAnimationsSlice } from '/src/features/Search/store/searchAnimationsSlice';
import { pageAnimationsSlice } from '/src/shared/store/pageAnimationSlice';

export const store = configureStore({
  reducer: {
    [searchSlice.name]: searchSlice.reducer,
    // Animations
    [searchAnimationsSlice.name]: searchAnimationsSlice.reducer,
    [pageAnimationsSlice.name]: pageAnimationsSlice.reducer,
    // Api
    [searchApi.reducerPath]: searchApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(searchApi.middleware),
});

setupListeners(store.dispatch);
