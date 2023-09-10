// Components
import { Flex } from '@mantine/core';
import {
  Button,
  Buttons,
  Card,
  Content,
  FavoriteButton,
  Image,
  Price,
  Prices,
} from './UI';
import { MantineButton } from '/src/shared/UI/MantineButton';
// Types
import { ProductCardProps, ProductData } from './types';

export const ProductCard = (props: ProductData & ProductCardProps) => {
  const {
    variant,
    // Handlers
    addToCartHandler,
    addToFavoritesHandler,
    removeFromFavoritesHandler,
    increaseHandler,
    decreaseHandler,
    deleteFromCartHandler,
    // Data
    img,
    name,
    description,
    count,
    totalPriceOfProduct,
    price,
    oldPrice,
    // UI
    favoriteButton,
  } = props;

  const contentProps = {
    variant: variant,
    title: name,
    description: description,
    count: count,
    totalPriceOfProduct: totalPriceOfProduct,
  };

  const buttonsProps = {
    addToCart: (
      <MantineButton
        onClickHandler={() => addToCartHandler && addToCartHandler(name, price)}
        variant="addCart"
      >
        Add Cart
      </MantineButton>
    ),
    addToFavorites: favoriteButton && (
      <FavoriteButton
        onClickHandler={() =>
          addToFavoritesHandler && addToFavoritesHandler(name)
        }
      />
    ),

    removeFromFavorites: (
      <Button
        variant="remove"
        onClickHandler={() => {
          removeFromFavoritesHandler && removeFromFavoritesHandler(name);
        }}
      />
    ),
    increase: (
      <Button
        variant="increase"
        onClickHandler={() => {
          increaseHandler && increaseHandler(name, price);
        }}
      />
    ),
    decrease: (
      <Button
        variant="decrease"
        onClickHandler={() => {
          decreaseHandler && decreaseHandler(name, price);
        }}
      />
    ),
    deleteFromCart: (
      <Button
        variant="delete"
        onClickHandler={() => {
          deleteFromCartHandler && deleteFromCartHandler(name);
        }}
      />
    ),
  };

  const pricesProps = {
    price: (
      <Price value={'$' + price.toString()} variant="price" size="1.5rem" />
    ),
    oldPrice: oldPrice && (
      <Price value={'$' + oldPrice.toString()} variant="oldPrice" size="1rem" />
    ),
  };

  return (
    <Card>
      <Image src={img.src} alt={img.alt} />
      <Flex mt={18} h="40%" direction="column" justify="space-between">
        <Content {...contentProps} />
        <Flex
          w="100%"
          justify="space-between"
          align="center"
          sx={{ position: 'relative' }}
        >
          <Prices {...pricesProps} />

          {variant !== 'orderCard' && (
            <Buttons variants={variant} {...buttonsProps} />
          )}
        </Flex>
      </Flex>
    </Card>
  );
};
