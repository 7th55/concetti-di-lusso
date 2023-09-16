// Components
import { Container, Title } from '@mantine/core';
import { Orders } from '/src/features/Orders';
// Hooks
import { useAuth } from '/src/features/Auth/store/authSlice';
import { useCart } from '/src/features/Cart/store/cartSlice';

export const OrdersPage = () => {
  const user = useAuth().user;
  const order = useCart();
  const authorized = user.accessToken;

  const ordersProps = {
    userInfo: {
      id: user.id,
      email: user.email,
    },
    cart: order,
  };
  return (
    <Container size={1440}>
      {authorized ? (
        <Orders variant="list" {...ordersProps} />
      ) : (
        <Title order={2}>Unauthorized</Title>
      )}
    </Container>
  );
};
