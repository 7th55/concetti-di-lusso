// Hooks
import { useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import {
  useOrderMutation,
  useCreateOrdersStoreMutation,
  useGetOrdersQuery,
} from './api/ordersApi';
// Components
import { Button, Box, Flex, Title, Modal } from '@mantine/core';
import { OrdersList, OrdersListHeaders } from './UI';
import { OrderForm } from '/src/entities/OrderForm';
// Styles
import classes from './styles.module.scss';
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

  const hasUserInfo = id && email;

  const { data, isSuccess, isError } = useGetOrdersQuery(
    hasUserInfo ? id.toString() : null
  );
  const [createOrdersStore] = useCreateOrdersStoreMutation();
  const [putOrder] = useOrderMutation();

  const [opened, { open, close }] = useDisclosure(false);

  // Если у пользователя нет стора с заказами
  // создаёт стор.
  useEffect(() => {
    if (isError && hasUserInfo) {
      createOrdersStore({ id, email, orders: [] });
    }
  }, [isError]);

  const createOrderHandler = (buyerInfo: RecipientFormType) => {
    if (isSuccess && hasUserInfo) {
      const create = createOrder.bind(null, id, data.orders, cart);
      putOrder(create(buyerInfo));
      close();
    }
  };

  return (
    <>
      {variant === 'list' && hasUserInfo && (
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
              userInfo={{ id: id, email: email }}
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
            <Box className={classes.createOrderBox}>
              <Button
                color="green"
                onClick={() => {
                  open();
                }}
              >
                Create Order
              </Button>
            </Box>
          </Flex>
        </>
      )}
    </>
  );
};
