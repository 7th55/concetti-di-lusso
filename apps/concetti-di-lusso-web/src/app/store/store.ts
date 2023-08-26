import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
// Slices
import { searchSlice } from '/src/features/Search';
import { searchApi } from '/src/features/Search';
import { productsApi } from '/src/pages/ProductsPage/store/productApi';
import { cartSlice } from '/src/features/Cart/store/store/CartSlice';
import { cartApi } from '/src/features/Cart/api/CartApi';

export const store = configureStore({
  reducer: {
    [searchSlice.name]: searchSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    // Api
    // Searching
    [searchApi.reducerPath]: searchApi.reducer,
    // Cart
    [cartApi.reducerPath]: cartApi.reducer,
    // Products
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      searchApi.middleware,
      productsApi.middleware,
      cartApi.middleware
    ),
});

setupListeners(store.dispatch);
