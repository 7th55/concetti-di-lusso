import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
//
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
// Slices
import { searchSlice } from '/src/features/Search';
import { searchApi } from '/src/features/Search';
import { productsApi } from '/src/pages/ProductsPage/store/productApi';
import { cartSlice } from '/src/features/Cart/store/store/CartSlice';
import { cartApi } from '/src/features/Cart/api/CartApi';
import { favoritesSlice } from '/src/features/Favorites/store/FavoritesSlice';
import { favoritesApi } from '/src/features/Favorites/api/FavoritesApi';

const cartPersisConfig = {
  key: 'carts',
  version: 1,
  storage,
};

const favoritesPersisConfig = {
  key: 'favorites',
  version: 1,
  storage,
};

const persistedCartReducer = persistReducer(
  cartPersisConfig,
  cartSlice.reducer
);

const persistedFavoritesReducer = persistReducer(
  favoritesPersisConfig,
  favoritesSlice.reducer
);

export const store = configureStore({
  reducer: {
    [searchSlice.name]: searchSlice.reducer,
    // Local Storage
    [cartSlice.name]: persistedCartReducer,
    [favoritesSlice.name]: persistedFavoritesReducer,
    // Api
    // Searching
    [searchApi.reducerPath]: searchApi.reducer,
    // Cart
    [cartApi.reducerPath]: cartApi.reducer,
    // Favorites 
    [favoritesApi.reducerPath]: favoritesApi.reducer,
    // Products
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(searchApi.middleware, productsApi.middleware, cartApi.middleware),
});

export let persistor = persistStore(store);

setupListeners(store.dispatch);
