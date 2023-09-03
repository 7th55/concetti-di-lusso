import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '/src/shared/types';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:2244/',
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = (getState() as RootState).auth.user.accessToken;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    signIn: builder.mutation<any, any>({
      query: (form) => ({
        url: '/signin',
        headers: {
          'content-type': 'application/json',
        },
        method: 'POST',
        body: form,
      }),
    }),
    protected: builder.mutation({
      query: (id) => ({
        url: `/600/users/${id}`,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSignInMutation, useProtectedMutation } = authApi;
