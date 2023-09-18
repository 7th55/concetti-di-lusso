// Browser Storages
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
import { cartSlice } from '/src/features/Cart/store/cartSlice';
import { favoritesSlice } from '/src/features/Favorites/store/favoritesSlice';
import { authSlice } from '/src/features/Auth/store/authSlice';
// Api
import { authApi } from '/src/features/Auth/api/authApi';
import { ordersApi } from '/src/features/Orders/api/ordersApi';
import { searchApi } from '/src/features/Search';
import { favoritesApi } from '/src/features/Favorites/api/FavoritesApi';
// import { productsApi } from '../../pages/ProductsPage/api/productApi';
import { concettiDiLussoApi } from '/src/shared/api/concettiDiLussoApi';

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
    // Session Storage
    [authSlice.name]: persistedAuthReducer,

    // Api
    [concettiDiLussoApi.reducerPath]: concettiDiLussoApi.reducer,
    // Auth
    [authApi.reducerPath]: authApi.reducer,
    // Buy
    [ordersApi.reducerPath]: ordersApi.reducer,
    // Searching
    [searchApi.reducerPath]: searchApi.reducer,
    // Favorites
    [favoritesApi.reducerPath]: favoritesApi.reducer,
    // Products
    // [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(concettiDiLussoApi.middleware)
      .concat(authApi.middleware)
      .concat(ordersApi.middleware)
      .concat(searchApi.middleware)
      .concat(favoritesApi.middleware)
      // .concat(productsApi.middleware),
});

export let persistor = persistStore(store);

setupListeners(store.dispatch);
