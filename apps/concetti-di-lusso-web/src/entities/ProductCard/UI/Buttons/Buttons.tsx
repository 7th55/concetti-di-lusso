import { Box, Group, MediaQuery } from '@mantine/core';
import React from 'react';
import { MantineButton } from '/src/shared/UI/MantineButton';
import { CardVariants } from '../../ProductCard';

export const Buttons = ({
  addToCart,
  addToFavorites,
  removeFromFavorites,
  increase,
  decrease,
  deleteFromCart,
  variants,
}: {
  addToCart?: React.ReactNode;
  addToFavorites?: React.ReactNode;
  removeFromFavorites?: React.ReactNode;
  increase?: React.ReactNode;
  decrease?: React.ReactNode;
  deleteFromCart?: React.ReactNode;
  variants: CardVariants;
}) => {
  return (
    <Box sx={{ position: 'relative', left: -10 }}>
      {variants === 'shoppingCard' && (
        <>
          <MediaQuery smallerThan={1430} styles={{ width: '40%' }}>
            {addToCart}
          </MediaQuery>
          {addToFavorites}
        </>
      )}
      {variants === 'favoritesCard' && (
        <>
          <MediaQuery smallerThan={1430} styles={{ width: '40%' }}>
            {removeFromFavorites}
          </MediaQuery>
        </>
      )}
      {variants === 'cartCard' && (
        <Group>
          {increase}
          {decrease}
          {deleteFromCart}
        </Group>
      )}
    </Box>
  );
};
