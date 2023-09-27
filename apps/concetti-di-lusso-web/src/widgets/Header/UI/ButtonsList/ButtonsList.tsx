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
// Styles
// TODO: Remove styles.css
import './styles.css';
import classes from './styles.module.scss';
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
      <MantineButton variant="square" icon={'favorites'} />
    </React.Fragment>,
    <React.Fragment key="shopping">
      <Badge content={badgeCart} />
      <MantineButton variant="square" icon={'shopping'} />
    </React.Fragment>,
  ];
  return (
    <div className="buttons-list">
      {/* TODO: Remove MediaQuery */}
      <MediaQuery
        smallerThan={1430}
        styles={{ left: isAuthorized ? '50px' : 'null' }}
      >
        <Box
          style={{ position: 'relative', left: isAuthorized ? '20px' : 'null' }}
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
                  <MantineButton variant="square" icon={'orders'} />
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
          style={{
            position: 'relative',
            left: isAuthorized ? '34px' : '-28px',
          }}
        >
          <Box style={{ visibility: isAuthorized ? 'hidden' : 'visible' }}>
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
                className={classes.logOut}
                variant="filled"
                color="error"
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
                className={classes.userInfoButton}
                variant="filled"
                color="lime"
                radius="xs"
                onClick={() => {
                  setOpenedInfo(!openedInfo);
                }}
              >
                <QuestionMark size="24px" />
              </ActionIcon>
            </>
          )}
          <Box className={classes.authBox}>
            <Auth opened={openedAuth} />
          </Box>
          <Box className={classes.userBox}>
            <UserInfo email={userInfo.user.email} opened={openedInfo} />
          </Box>
        </Box>
      </MediaQuery>
    </div>
  );
};
