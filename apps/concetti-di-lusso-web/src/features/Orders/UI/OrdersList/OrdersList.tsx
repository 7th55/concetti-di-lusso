import { Button, Flex, Text, Space } from '@mantine/core';
import { OrdersListProps } from '/src/features/Orders/types/types';
import { orderDate, orderTime } from '/src/features/Orders/lib/lib';

export const OrdersList = ({
  orders,
  deleteHandler,
  userInfo,
}: OrdersListProps) => {
  const { id, email } = userInfo;
  return (
    <>
      {orders.map((order, index: number) => {
        const orderInfo = order.orderInfo;
        const date = orderDate(orderInfo.date);
        const time = orderTime(orderInfo.time, ':');

        return (
          <Flex h="50px" align="center" key={order.orderInfo.time}>
            <Flex w="100%">
              <Flex
                h="100%"
                w="50%"
                justify="start"
                align="center"
                sx={(theme) => ({
                  backgroundColor:
                    theme.colorScheme === 'light'
                      ? theme.colors.cultured[9]
                      : theme.colors.dark[4],
                })}
              >
                <Text
                  size="lg"
                  sx={{
                    fontStyle: 'bold',
                  }}
                >
                  Created: {date} {time}
                </Text>
              </Flex>
              <Flex h="100%" w="15%" justify="start" align="center">
                <Text
                  size="lg"
                  sx={{
                    fontStyle: 'bold',
                  }}
                >
                  Price: {order.totalPrice}
                </Text>
              </Flex>
              <Flex h="100%" w="15%" justify="start" align="center">
                <Text
                  size="lg"
                  sx={{
                    fontStyle: 'bold',
                  }}
                >
                  Items: {order.products.reduce((a, i) => a + i.count, 0)}
                </Text>
              </Flex>
              <Flex w="20%" justify="end">
                <Button
                  // variant="outlined"
                  color="blue"
                  onClick={() => {
                    deleteHandler({
                      id,
                      email,
                      orders: orders.filter(
                        (order, ind: number) => ind !== index
                      ),
                    });
                  }}
                >
                  Del Order
                </Button>
              </Flex>
            </Flex>
          </Flex>
        );
      })}
    </>
  );
};
