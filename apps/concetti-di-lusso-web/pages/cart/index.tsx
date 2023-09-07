// Components
import { Container } from '@mantine/core';
import { useAuth } from '/src/features/Auth/store/authSlice';
import { Buy } from '/src/features/Buy/Buy';
import { Cart } from '/src/features/Cart/Cart';

export default function Page() {
  const authorized = useAuth().user.accessToken;
  return (
    <Container size={1440}>
      {authorized && <Buy />}
      <Cart />
    </Container>
  );
}
