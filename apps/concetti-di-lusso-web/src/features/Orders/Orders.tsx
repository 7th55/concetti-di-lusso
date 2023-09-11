// Hooks
import { useEffect } from 'react';
import {
  useOrderMutation,
  useCreateOrdersStoreMutation,
  useGetOrdersQuery,
} from './api/ordersApi';
import { useGetProductsByNameQuery } from '/src/shared/api/concettiDiLussoApi';
// Components
import { Button, Box, Flex, Title } from '@mantine/core';
import { ProductFromCart } from '/src/shared/types';
import { ProductCard } from '/src/entities/ProductCard';
import { OrdersList } from './UI/OrdersList/OrdersList';
// Lib
import { productsByNameQuery } from '/src/shared/lib/lib';
// Types
import { OrdersProps } from './types/types';

export const Orders = (props: OrdersProps) => {
  const {
    userInfo: { id, email },
    cart,
  } = props;

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
    <>
      <Title>Orders:</Title>
      <Flex
        sx={(theme) => ({
          backgroundColor: theme.colors.maroon[9],
          color: theme.colors.cultured[0],
        })}
      >
        <Flex w="50%">
          <Title order={2} size="h4">
            Order Date:
          </Title>
        </Flex>
        <Flex w="15%">
          <Title order={2} size="h4">
            Order Price:
          </Title>
        </Flex>
        <Flex w="15%">
          <Title order={2} size="h4">
            Order Items:
          </Title>
        </Flex>
        <Flex w="20%"></Flex>
      </Flex>
      {isSuccess && (
        <OrdersList
          orders={data.orders}
          deleteHandler={putOrder}
          userInfo={{ id: id as number, email: email as string }}
        />
      )}
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
                    orderInfo: {
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
          Create Order
        </Button>
      </Box>
    </>
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
