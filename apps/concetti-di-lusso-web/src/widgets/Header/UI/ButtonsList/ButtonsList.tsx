import React from 'react';
// Components
import Link from 'next/link';
import { Auth } from '/src/features/Auth';
import { Badge } from '/src/shared/UI/Badge';
import { Search } from '/src/features/Search';
import { Button as Button, Box, MediaQuery, ActionIcon } from '@mantine/core';
import { MantineButton } from '/src/shared/UI/MantineButton';
// Hooks
import {
  useAuth,
  authorized as logOut,
} from '/src/features/Auth/store/authSlice';
import { useFavorites } from '/src/features/Favorites/store/favoritesSlice';
import { useCart } from '/src/features/Cart/store/cartSlice';
// Icons
import shoppingIcon from './assets/shopping.svg';
import shoppingIconActive from './assets/shopping-active.svg';
import favIcon from './assets/favorites.svg';
import favIconActive from './assets/favorites-active.svg';
import orders from './assets/orders.svg';
import ordersActive from './assets/orders-active.svg';

// Styles
import './styles.css';
// Types
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { UserInfo } from '/src/entities/UserInfo';
import { QuestionMark, X } from 'tabler-icons-react';

export const ButtonsList = () => {
  const [openedAuth, setOpenedAuth] = useState(false);
  const [openedInfo, setOpenedInfo] = useState(false);

  const linkPaths = ['', '/favorites', '/cart'];

  const dispatch = useDispatch();
  const cart = useCart();
  const favorites = useFavorites();
  const userInfo = useAuth();

  // UI
  const badgeCart = cart.items.reduce(
    (badgeContent, i) => badgeContent + i.count,
    0
  );
  const badgeFavorites = favorites.items.length;
  const isAuthorized = useAuth().user.accessToken !== null;

  useEffect(() => {
    isAuthorized && setOpenedAuth(false);
    !isAuthorized && setOpenedInfo(false);
  }, [isAuthorized]);

  const buttons = [
    <Search key="search" />,
    <React.Fragment key="favorites">
      <Badge content={badgeFavorites} />
      <MantineButton
        variant="square"
        icon={favIcon.src}
        activeIcon={favIconActive.src}
      />
    </React.Fragment>,
    <React.Fragment key="shopping">
      <Badge content={badgeCart} />
      <MantineButton
        variant="square"
        icon={shoppingIcon.src}
        activeIcon={shoppingIconActive.src}
      />
    </React.Fragment>,
  ];
  return (
    <div className="buttons-list">
      <MediaQuery
        smallerThan={1430}
        styles={{ left: isAuthorized ? '50px' : 'null' }}
      >
        <Box
          sx={{ position: 'relative', left: isAuthorized ? '20px' : 'null' }}
        >
          <div className="buttons-list__shopping-buttons">
            {buttons.map((button, index) => (
              <div key={index} className="buttons-list__shopping-button">
                {index !== 0 ? (
                  <Link href={linkPaths[index]}>{button}</Link>
                ) : (
                  // У Search кнопки логика отличается
                  button
                )}
              </div>
            ))}
            {isAuthorized && (
              <div className="buttons-list__shopping-button">
                <Link href="/orders">
                  <MantineButton
                    variant="square"
                    icon={orders.src}
                    activeIcon={ordersActive.src}
                  />
                </Link>
              </div>
            )}
          </div>
        </Box>
      </MediaQuery>
      <MediaQuery
        smallerThan={1430}
        styles={{ left: isAuthorized ? '34px' : 0 }}
      >
        <Box
          sx={{ position: 'relative', left: isAuthorized ? '34px' : '-28px' }}
        >
          <Box sx={{ visibility: isAuthorized ? 'hidden' : 'visible' }}>
            <MantineButton
              onClickHandler={() => setOpenedAuth(!openedAuth)}
              variant="signIn"
            >
              Sign In
            </MantineButton>
          </Box>

          {isAuthorized && (
            <>
              <ActionIcon
                variant="filled"
                color="error"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 66,
                  height: 49,
                  width: 49,
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
                <X size="24px" />
              </ActionIcon>
              <ActionIcon
                variant="filled"
                color="lime"
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 62,
                  height: 49,
                  width: 49,
                }}
                radius="xs"
                onClick={() => {
                  setOpenedInfo(!openedInfo);
                }}
              >
                <QuestionMark size="24px" />
              </ActionIcon>
            </>
          )}
          <Box sx={{ position: 'absolute', top: 55, left: -178 }}>
            <Auth opened={openedAuth} />
          </Box>
          <Box sx={{ position: 'absolute', top: 55, left: -213 }}>
            <UserInfo email={userInfo.user.email} opened={openedInfo} />
          </Box>
        </Box>
      </MediaQuery>
    </div>
  );
};
