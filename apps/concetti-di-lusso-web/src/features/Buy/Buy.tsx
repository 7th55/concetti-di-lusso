import React, { useEffect } from 'react';
import {
  useOrderMutation,
  useCreateOrdersStoreMutation,
  useGetOrdersQuery,
} from './api/buyApi';
import { Button, Box, Group } from '@mantine/core';
import { useCart } from '../Cart/store/cartSlice';
import { useAuth } from '../Auth/store/authSlice';

export const Buy = () => {
  const id = useAuth().user.id;
  const cart = useCart();

  const { data, isSuccess, isError, refetch } = useGetOrdersQuery(id);
  const [createOrdersStore] = useCreateOrdersStoreMutation();
  const [putOrder] = useOrderMutation();

  // Если у пользователя нет стора с заказами
  useEffect(() => {
    if (isError) {
      createOrdersStore({ id, orders: [] });
      refetch();
    }
  }, [isError]);

  return (
    <div>
      {isSuccess &&
        data.orders.map((i, index: number) => (
          <>
            <h4 key={i.totalPrice}>{i.totalPrice}</h4>
            <ul>
              <li>
                {i.date.time} {i.date.date}
              </li>
            </ul>
            <Button
              onClick={() => {
                putOrder({
                  id,
                  orders: data.orders.filter((i, ind: number) => ind !== index),
                });
                // Переписать на теги
                refetch();
              }}
            >
              Del Order
            </Button>
          </>
        ))}
      <Box mt="lg">
        <Button
          onClick={() => {
            isSuccess &&
              putOrder({
                id,
                orders: [
                  ...data.orders,
                  {
                    date: {
                      time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
                      date: `${new Date().getDay()}.${new Date().getDate()}.${new Date().getFullYear()},`,
                    },
                    products: cart.items,
                    totalPrice: cart.totalPrice,
                  },
                ],
              });
            refetch();
          }}
        >
          Add Order
        </Button>
      </Box>
    </div>
  );
};
