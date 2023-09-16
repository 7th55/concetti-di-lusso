// Components
import { Box, Container, Flex, Space, Title } from '@mantine/core';
import { Orders } from '/src/features/Orders';
import { Cart } from '/src/features/Cart';
// Hooks
import { useAuth } from '/src/features/Auth/store/authSlice';
import { useCart } from '/src/features/Cart/store/cartSlice';

export const CartPage = () => {
  const user = useAuth().user;
  const cartState = useCart();
  const authorized = user.accessToken;

  const ordersProps = {
    userInfo: {
      id: user.id,
      email: user.email,
    },
    cart: cartState,
  };
  return (
    <Container size={1440}>
      {cartState.items.length !== 0 && (
        <>
          <Flex justify="space-between">
            <Title order={2}>
              Total Price Of Products: {cartState.totalPrice}
            </Title>
            {authorized && <Orders variant="create" {...ordersProps} />}
          </Flex>
        </>
      )}
      {cartState.items.length === 0 && (
        <Box
          sx={{
            boxSizing: 'border-box',
            padding: 2,
            width: '100%',
            backgroundColor: 'secondary.main',
            borderRadius: '10px',
          }}
        >
          <Title order={2}>Add Products to Cart</Title>
        </Box>
      )}
      <Space h="sm" />
      <Cart />
    </Container>
  );
};
