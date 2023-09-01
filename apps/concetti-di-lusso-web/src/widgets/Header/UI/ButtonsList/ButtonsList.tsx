// Components
import Link from 'next/link';
import { Auth } from '/src/features/Auth';
import { Badge } from '/src/shared/UI/Badge';
import { Button } from '/src/shared/UI/Button';
import { Search } from '/src/features/Search';
// Hooks
import { useCart } from '/src/features/Cart/store/cartSlice';
// Styles
import './styles.css';
// Types
import { ButtonType } from '/src/shared/types';
import { useFavorites } from '/src/features/Favorites/store/favoritesSlice';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';

export const ButtonsList = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const buttons: ButtonType[] = ['search', 'favorites', 'shopping'];
  const linkPaths = ['', '/favorites', '/cart'];

  const cart = useCart();
  const favorites = useFavorites();

  const badgeCart = cart.items.reduce(
    (badgeContent, i) => badgeContent + i.count,
    0
  );
  const badgeFavorites = favorites.items.length;
  const exhaustiveCheck = (a: any): never => {
    throw Error(':c Exhaustiveness ');
  };
  return (
    <div className="buttons-list">
      <div className="buttons-list__shopping-buttons">
        {buttons.map((button, index) => (
          <div key={button} className="buttons-list__shopping-button">
            {button === 'search' ? (
              <Search />
            ) : button === 'shopping' ? (
              <Link href={linkPaths[index]}>
                <Badge content={badgeCart} />
                <Button buttonStyle={button} />
              </Link>
            ) : button === 'favorites' ? (
              <Link href={linkPaths[index]}>
                <Badge content={badgeFavorites} />
                <Button buttonStyle={button} />
              </Link>
            ) : (
              exhaustiveCheck(button)
            )}
          </div>
        ))}
      </div>
      <div className="buttons-list__sign-in-button">
        <Button onClickHandler={open} buttonStyle="signIn">
          Sign In
        </Button>
        <Modal
          size="lg"
          opened={opened}
          onClose={close}
          title="Authentication"
          centered
        >
          <Auth />
        </Modal>
      </div>
    </div>
  );
};
