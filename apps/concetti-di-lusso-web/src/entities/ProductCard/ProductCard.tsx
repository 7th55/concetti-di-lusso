// Components
import { ActionIcon, Button, Flex } from '@mantine/core';
import {
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
import { ProductData } from './types/types';
import { Minus, Plus, ShoppingCartOff, HeartOff } from 'tabler-icons-react';

export type CardVariants = 'shoppingCard' | 'favoritesCard' | 'cartCard';

export const ProductCard = (
  props: ProductData & {
    variant: CardVariants;
    count?: number | string;
    totalPriceOfProduct?: number | string;
    addToCartHandler?: (name: string, price: number) => void;
    addToFavoritesHandler?: (name: string) => void;
    removeFromFavoritesHandler?: (name: string) => void;
    increaseHandler?: (name: string, price: number) => void;
    decreaseHandler?: (name: string, price: number) => void;
    deleteFromCartHandler?: (name: string) => void;
  }
) => {
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

  return (
    <Card>
      <Image src={img.src} alt={img.alt} />
      <Flex mt={18} h="40%" direction="column" justify="space-between">
        <Content
          variant={variant}
          title={name}
          description={description}
          count={count}
          totalPriceOfProduct={totalPriceOfProduct}
        />
        <Flex
          w="100%"
          justify="space-between"
          align="center"
          sx={{ position: 'relative' }}
        >
          <Prices
            variant={variant}
            price={
              <Price
                value={'$' + price.toString()}
                variant="price"
                size="1.5rem"
              />
            }
            oldPrice={
              oldPrice && (
                <Price
                  value={'$' + oldPrice.toString()}
                  variant="oldPrice"
                  size="1rem"
                />
              )
            }
          />
          <Buttons
            addToCart={
              <MantineButton
                onClickHandler={() =>
                  addToCartHandler && addToCartHandler(name, price)
                }
                variant="addCart"
              >
                Add Cart
              </MantineButton>
            }
            addToFavorites={
              favoriteButton && (
                <FavoriteButton
                  onClickHandler={() =>
                    addToFavoritesHandler && addToFavoritesHandler(name)
                  }
                />
              )
            }
            removeFromFavorites={
              <ActionIcon
                variant="filled"
                color="red"
                onClick={() => {
                  removeFromFavoritesHandler &&
                    removeFromFavoritesHandler(name);
                }}
              >
                <HeartOff size={48} strokeWidth={2} />
              </ActionIcon>
            }
            increase={
              <ActionIcon
                variant="outline"
                color="green"
                onClick={() => {
                  increaseHandler && increaseHandler(name, price);
                }}
              >
                <Plus size={48} strokeWidth={2} />
              </ActionIcon>
            }
            decrease={
              <ActionIcon
                variant="outline"
                color="orange"
                onClick={() => {
                  decreaseHandler && decreaseHandler(name, price);
                }}
              >
                <Minus size={48} strokeWidth={2} />
              </ActionIcon>
            }
            deleteFromCart={
              <ActionIcon
                variant="filled"
                color="red"
                onClick={() => {
                  deleteFromCartHandler && deleteFromCartHandler(name);
                }}
              >
                <ShoppingCartOff size={48} strokeWidth={2} />
              </ActionIcon>
            }
            variants={variant}
          />
        </Flex>
      </Flex>
    </Card>
  );
};
