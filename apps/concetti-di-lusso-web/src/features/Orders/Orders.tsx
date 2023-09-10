// Hooks
import { useEffect } from 'react';
import {
  useOrderMutation,
  useCreateOrdersStoreMutation,
  useGetOrdersQuery,
} from './api/ordersApi';
// Components
import { Button, Box, Flex, Text, Space, Card } from '@mantine/core';
import { ProductFromCart } from '/src/shared/types';
import { Image } from '/src/entities/ProductCard/UI';
import { useGetProductsByNameQuery } from '/src/shared/api/concettiDiLussoApi';
import { productsByNameQuery } from '/src/shared/lib/lib';
import { ProductCard } from '/src/entities/ProductCard';

export const Orders = (props: {
  cart: {
    items: Array<ProductFromCart>;
    totalPrice: number;
  };
  id: number | null;
  email: string | null;
}) => {
  const { id, email, cart } = props;
  const { data, isSuccess, isError } = useGetOrdersQuery(id);
  const [createOrdersStore] = useCreateOrdersStoreMutation();
  const [putOrder] = useOrderMutation();

  // Если у пользователя нет стора с заказами
  // создаёт стор.
  useEffect(() => {
    if (isError) {
      createOrdersStore({ id, email, orders: [] });
    }
  }, [isError]);

  return (
    <div>
      {isSuccess &&
        data.orders.map((i, index: number) => {
          const date = i.date.date.split('.');
          const day = date[0];
          const month = date[1];
          let months = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ];
          const monthString = months[+month - 1];
          console.log(monthString);

          return (
            <div key={i.date.time}>
              <Flex>
                <OrderedProduct products={i.products} />
                <Flex direction="column">
                  <Flex
                    direction="column"
                    w="100px"
                    h="100px"
                    justify="center"
                    align="center"
                    sx={(theme) => ({
                      backgroundColor: theme.colors.cultured[9],
                    })}
                  >
                    <Flex h="70%" justify="center" align="center">
                      <Text
                        size="lg"
                        sx={(theme) => ({
                          color: theme.colors.maroon,
                          fontStyle: 'bold',
                          fontWeight: 900,
                          fontSize: 80,
                        })}
                      >
                        {day}
                      </Text>
                    </Flex>
                    <Flex
                      justify="center"
                      w="100%"
                      h="30%"
                      sx={{ backgroundColor: 'maroon' }}
                    >
                      <Text
                        size="lg"
                        sx={(theme) => ({
                          color: 'white',
                          fontStyle: 'bold',
                        })}
                      >
                        {monthString}
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex justify="center">
                    <Text size="xl">{i.date.time}</Text>
                  </Flex>
                  <Text size="xl">Price: {i.totalPrice}</Text>
                </Flex>
              </Flex>
              <Space h="sm" />
              <Button
                onClick={() => {
                  putOrder({
                    id,
                    email,
                    orders: data.orders.filter(
                      (i, ind: number) => ind !== index
                    ),
                  });
                }}
              >
                Del Order
              </Button>
            </div>
          );
        })}
      <Box mt="lg">
        <Button
          color="green"
          onClick={() => {
            isSuccess &&
              putOrder({
                id,
                orders: [
                  ...data.orders,
                  {
                    date: {
                      time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
                      date: `${new Date().getDate()}.${
                        new Date().getMonth() + 1
                      }.${new Date().getFullYear()}`,
                    },
                    products: cart.items,
                    totalPrice: cart.totalPrice,
                  },
                ],
              });
          }}
        >
          Add Order
        </Button>
      </Box>
    </div>
  );
};

const OrderedProduct = ({ products }: { products: Array<ProductFromCart> }) => {
  const query = productsByNameQuery(products);
  const { data, isSuccess } = useGetProductsByNameQuery(query);

  return (
    <>
      <Flex
        justify="left"
        w="100%"
        h="100%"
        columnGap="xl"
        sx={{ overflowX: 'auto' }}
      >
        {isSuccess
          ? data.map((product: any) => (
              <ProductCard key={product.name} {...product} oldPrice={false} />
            ))
          : 'No'}
      </Flex>
    </>
  );
};
