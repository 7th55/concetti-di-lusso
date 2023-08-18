import { configureStore } from '@reduxjs/toolkit';
import { searchReducer } from '/src/features/Search';
import { searchApi } from '/src/features/Search';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    search: searchReducer,

    [searchApi.reducerPath]: searchApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(searchApi.middleware),
});

setupListeners(store.dispatch);
