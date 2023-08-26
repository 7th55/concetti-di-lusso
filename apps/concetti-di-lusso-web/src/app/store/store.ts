import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
// Slices
import { searchSlice } from '/src/features/Search';
import { searchApi } from '/src/features/Search';
import { productsApi } from '/src/pages/ProductsPage/store/productApi';

export const store = configureStore({
  reducer: {
    [searchSlice.name]: searchSlice.reducer,
    // Api
    // Searching
    [searchApi.reducerPath]: searchApi.reducer,
    // Productss
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(searchApi.middleware, productsApi.middleware),
});

setupListeners(store.dispatch);
