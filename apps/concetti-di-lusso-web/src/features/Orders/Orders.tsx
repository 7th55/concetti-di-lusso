// Hooks
import { useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import {
  useOrderMutation,
  useCreateOrdersStoreMutation,
  useGetOrdersQuery,
} from './api/ordersApi';
// Components
import { Button, Box, Flex, Title, Modal, MediaQuery } from '@mantine/core';
import { OrdersList, OrdersListHeaders } from './UI';
import { OrderForm } from '/src/entities/OrderForm';
// Types
import { OrdersProps } from './types';
import { createOrder } from './lib/lib';
import { RecipientFormType } from '/src/entities/OrderForm';

export const Orders = (props: OrdersProps) => {
  const {
    variant,
    userInfo: { id, email },
    cart,
  } = props;

  const { data, isSuccess, isError } = useGetOrdersQuery(id);
  const [createOrdersStore] = useCreateOrdersStoreMutation();
  const [putOrder] = useOrderMutation();

  const [opened, { open, close }] = useDisclosure(false);

  // Если у пользователя нет стора с заказами
  // создаёт стор.
  useEffect(() => {
    if (isError) {
      createOrdersStore({ id, email, orders: [] });
    }
  }, [isError]);

  const createOrderHandler = (buyerInfo: RecipientFormType) => {
    if (isSuccess) {
      const create = createOrder.bind(null, id as number, data.orders, cart);
      putOrder(create(buyerInfo));
      close();
    }
  };

  return (
    <>
      {variant === 'list' && (
        <>
          <Title>Orders:</Title>
          <OrdersListHeaders
            titles={[
              'Order Date:',
              'Order Info:',
              'Recipient:',
              'Delivery Address:',
            ]}
          />
          {isSuccess && (
            <OrdersList
              orders={data.orders}
              deleteHandler={putOrder}
              userInfo={{ id: id as number, email: email as string }}
            />
          )}
        </>
      )}
      {variant === 'create' && (
        <>
          <Modal opened={opened} onClose={close} title="Order Recipient">
            <OrderForm createOrderHandler={createOrderHandler} />
          </Modal>

          <Flex justify="right">
            <MediaQuery
              smallerThan={1430}
              styles={{ position: 'initial', left: 0 }}
            >
              <Box>
                <Button
                  color="green"
                  onClick={() => {
                    open();
                  }}
                >
                  Create Order
                </Button>
              </Box>
            </MediaQuery>
          </Flex>
        </>
      )}
    </>
  );
};
