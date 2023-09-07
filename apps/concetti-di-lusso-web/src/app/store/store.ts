import storage from 'redux-persist/lib/storage';
import sessionStorage from 'redux-persist/lib/storage/session';
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
import { cartSlice } from '/src/features/Cart/store/cartSlice';
import { cartApi } from '/src/features/Cart/api/CartApi';
import { favoritesSlice } from '/src/features/Favorites/store/favoritesSlice';
import { favoritesApi } from '/src/features/Favorites/api/FavoritesApi';
import { authApi } from '/src/features/Auth/api/authApi';
import { authSlice } from '/src/features/Auth/store/authSlice';
import { buyApi } from '/src/features/Buy/api/buyApi';

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

const authPersisConfig = {
  key: 'auth',
  version: 1,
  storage: sessionStorage,
};

const persistedCartReducer = persistReducer(
  cartPersisConfig,
  cartSlice.reducer
);

const persistedFavoritesReducer = persistReducer(
  favoritesPersisConfig,
  favoritesSlice.reducer
);

const persistedAuthReducer = persistReducer(
  authPersisConfig,
  authSlice.reducer
);

export const store = configureStore({
  reducer: {
    // State
    [searchSlice.name]: searchSlice.reducer,
    // Local Storage
    [cartSlice.name]: persistedCartReducer,
    [favoritesSlice.name]: persistedFavoritesReducer,
    // Auth
    [authSlice.name]: persistedAuthReducer,

    // Api
    // Auth
    [authApi.reducerPath]: authApi.reducer,
    // Buy
    [buyApi.reducerPath]: buyApi.reducer,
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
    })
      .concat(authApi.middleware)
      .concat(buyApi.middleware)
      .concat(searchApi.middleware)
      .concat(cartApi.middleware)
      .concat(favoritesApi.middleware)
      .concat(productsApi.middleware),
});

export let persistor = persistStore(store);

setupListeners(store.dispatch);
