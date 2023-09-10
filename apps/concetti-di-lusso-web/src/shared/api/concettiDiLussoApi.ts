import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductData } from '/src/shared/types';

// Define a service using a base URL and expected endpoints
export const concettiDiLussoApi = createApi({
  reducerPath: 'concettiDiLussoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:2244/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Array<ProductData>, string>({
      query: (products) => `/products/${products}`,
    }),
    getProductsByName: builder.query<Array<ProductData>, string>({
      query: (products) => `/products?name${products}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery, useGetProductsByNameQuery } =
  concettiDiLussoApi;
