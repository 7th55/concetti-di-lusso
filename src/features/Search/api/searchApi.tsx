import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:2244/' }),
  endpoints: (builder) => ({
    getSearchProducts: builder.query<any, string>({
      query: (products) => `products?q=${products}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetSearchProductsQuery } = searchApi;
