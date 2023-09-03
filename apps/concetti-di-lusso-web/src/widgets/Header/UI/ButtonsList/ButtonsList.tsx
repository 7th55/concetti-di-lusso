// Components
import Link from 'next/link';
import { Auth } from '/src/features/Auth';
import { Badge } from '/src/shared/UI/Badge';
import { Button } from '/src/shared/UI/Button';
import { Search } from '/src/features/Search';
import { Menu, Button as MantineButton, Box, Container } from '@mantine/core';
import { MantineButton as SignInButton } from '/src/shared/UI/MantineButton';
// Hooks
import {
  useAuth,
  authorized as logOut,
} from '/src/features/Auth/store/authSlice';
import { useFavorites } from '/src/features/Favorites/store/favoritesSlice';
import { useCart } from '/src/features/Cart/store/cartSlice';
// Styles
import './styles.css';
// Types
import { ButtonType } from '/src/shared/types';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

export const ButtonsList = () => {
  const [opened, setOpened] = useState(false);

  const buttons: ButtonType[] = ['search', 'favorites', 'shopping'];
  const linkPaths = ['', '/favorites', '/cart'];

  const dispatch = useDispatch();
  const cart = useCart();
  const favorites = useFavorites();

  // UI
  const badgeCart = cart.items.reduce(
    (badgeContent, i) => badgeContent + i.count,
    0
  );
  const badgeFavorites = favorites.items.length;
  const exhaustiveCheck = (a: any): never => {
    throw Error(':c Exhaustiveness ');
  };
  const isAuthorized = useAuth().user.accessToken !== null;

  useEffect(() => {
    isAuthorized && setOpened(false);
  }, [isAuthorized]);

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
        <Box sx={{ visibility: isAuthorized ? 'hidden' : 'visible' }}>
          <SignInButton
            onClickHandler={() => setOpened(!opened)}
            variant="signIn"
          >
            Sign In
          </SignInButton>
        </Box>
        {isAuthorized && (
          <>
            <MantineButton
              variant="filled"
              color="error"
              sx={{
                position: 'absolute',
                top: 0,
                left: 66,
                height: 49,
                width: 62,
              }}
              radius="xs"
              onClick={() => {
                dispatch(
                  logOut({
                    user: { email: null, id: null, accessToken: null },
                  })
                );
              }}
            >
              Out
            </MantineButton>
            <MantineButton
              variant="filled"
              color="lime"
              sx={{
                position: 'absolute',
                top: 0,
                right: 62,
                height: 49,
                width: 62,
              }}
              radius="xs"
            >
              Info
            </MantineButton>
          </>
        )}

        <Box sx={{ position: 'absolute', top: 55, left: -178 }}>
          <Menu position="bottom-end" opened={opened}>
            <Menu.Dropdown>
              <Menu.Item>
                <Auth />
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Box>
      </div>
    </div>
  );
};
