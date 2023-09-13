// Components
import { Box, Stack } from '@mantine/core';
import { OrderCard } from '/src/entities/OrderCard';
// Lib
import { orderDate, orderTime } from '/src/features/Orders/lib';
// Types
import { OrdersListProps } from '/src/features/Orders/types';

export const OrdersList = ({
  orders,
  deleteHandler,
  userInfo,
}: OrdersListProps) => {
  const { id, email } = userInfo;
  return (
    <Box mah={320} sx={{ overflowY: 'auto' }}>
      <Stack spacing="xs" maw={1380}>
        {orders.map((order, index: number) => {
          const orderInfo = order.orderInfo;
          const date = orderDate(orderInfo.date);
          const time = orderTime(orderInfo.time, ':');

          const recipienInfo = {
            firstName: orderInfo.firstName,
            lastName: orderInfo.lastName,
            phone: orderInfo.phone,
            email: orderInfo.email,
            address: orderInfo.address,
          };

          const orderCardProps = {
            ...recipienInfo,
            date,
            time,
            totalPrice: order.totalPrice,
            items: order.products.reduce((q, ite) => q + ite.count, 0),
            deleteHandler: () =>
              deleteHandler({
                id,
                email,
                orders: orders.filter((order, ind: number) => ind !== index),
              }),
          };

          return <OrderCard key={order.orderInfo.time} {...orderCardProps} />;
        })}
      </Stack>
    </Box>
  );
};
