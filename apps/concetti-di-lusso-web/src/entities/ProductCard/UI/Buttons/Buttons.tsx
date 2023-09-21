import { Box, Group } from '@mantine/core';
// Styles
import classes from './styles.module.scss';
// Types
import { CardVariants } from '/src/entities/ProductCard/types';

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
    <Box className={classes.buttonsBox}>
      {variants === 'shoppingCard' && (
        <>
          {addToCart}
          {addToFavorites}
        </>
      )}
      {variants === 'favoritesCard' && <>{removeFromFavorites}</>}
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
