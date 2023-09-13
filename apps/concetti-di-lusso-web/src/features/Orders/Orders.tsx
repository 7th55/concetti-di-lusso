// Hooks
import { useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import {
  useOrderMutation,
  useCreateOrdersStoreMutation,
  useGetOrdersQuery,
} from './api/ordersApi';
// import { useGetProductsByNameQuery } from '/src/shared/api/concettiDiLussoApi';
// Components
import { Button, Box, Flex, Title, Modal } from '@mantine/core';
// import { ProductFromCart } from '/src/shared/types';
// import { ProductCard } from '/src/entities/ProductCard';
import { OrdersList, OrdersListHeaders } from './UI';
import { OrderForm } from '/src/entities/OrderForm';
// // Lib
// import { productsByNameQuery } from '/src/shared/lib/lib';
// Types
import { OrdersProps } from './types';
import { createOrder } from './lib/lib';
import { RecipientFormType } from '/src/entities/OrderForm';

export const Orders = (props: OrdersProps) => {
  const {
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
      <Modal opened={opened} onClose={close} title="Order Recipient">
        <OrderForm createOrderHandler={createOrderHandler} />
      </Modal>
      <Box mt="lg">
        <Button
          color="green"
          onClick={() => {
            open();
          }}
        >
          Create Order
        </Button>
      </Box>
    </>
  );
};

// const OrderedProduct = ({ products }: { products: Array<ProductFromCart> }) => {
//   const query = productsByNameQuery(products);
//   const { data, isSuccess } = useGetProductsByNameQuery(query);

//   return (
//     <>
//       <Flex
//         justify="left"
//         w="100%"
//         h="100%"
//         columnGap="xl"
//         sx={{ overflowX: 'auto' }}
//       >
//         {isSuccess
//           ? data.map((product: any) => (
//               <ProductCard key={product.name} {...product} oldPrice={false} />
//             ))
//           : 'No'}
//       </Flex>
//     </>
//   );
// };
