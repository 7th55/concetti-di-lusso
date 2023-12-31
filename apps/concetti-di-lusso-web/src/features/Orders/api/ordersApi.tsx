import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductFromCart, RootState } from '/src/shared/types';
import { OrdersData } from '/src/features/Orders/types';
import { OrderInfo } from '../types/types';

export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  tagTypes: ['Orders'],
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
    getOrders: builder.query<OrdersData, string | null>({
      query: (id) => ({
        url: `/440/orders/${id}`,
      }),
      providesTags: (result) => [{ type: 'Orders', id: result?.id }],
    }),
    createOrdersStore: builder.mutation<
      { id: OrdersData['id']; email: OrdersData['email']; orders: [] },
      { id: OrdersData['id']; email: OrdersData['email']; orders: [] }
    >({
      query: (body) => ({
        url: '/660/orders',
        headers: {
          'content-type': 'application/json',
        },
        method: 'POST',
        body,
      }),
      invalidatesTags: (body) => [{ type: 'Orders', id: body?.id }],
    }),
    order: builder.mutation<
      OrdersData,
      {
        id: number;
        orders: Array<{
          orderInfo: OrderInfo;
          products: Array<ProductFromCart>;
          totalPrice: number;
        }>;
      }
    >({
      query: (body) => ({
        url: `/660/orders/${body.id}`,
        headers: {
          'content-type': 'application/json',
        },
        method: 'PUT',
        body,
      }),
      invalidatesTags: (body) => [{ type: 'Orders', id: body?.id }],
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useCreateOrdersStoreMutation,
  useOrderMutation,
} = ordersApi;
