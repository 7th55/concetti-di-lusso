import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductData } from '/src/shared/types';

// Define a service using a base URL and expected endpoints
export const favoritesApi = createApi({
  reducerPath: 'favoritesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:2244/' }),
  endpoints: (builder) => ({
    getProductsByName: builder.query<Array<ProductData>, string>({
      query: (products) => `products?name${products}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsByNameQuery } = favoritesApi;
