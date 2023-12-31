import { StaticImageData } from 'next/image';

export type ProductData = {
  id?: number | string;
  name: string;
  description?: string;
  price: number;
  oldPrice?: number | false;
  favoriteButton?: boolean;
  img: {
    src: StaticImageData;
    alt: string;
  };
};

export type CardVariants = 'shoppingCard' | 'favoritesCard' | 'cartCard' | 'orderCard';
export type ProductCardProps = {
  variant: CardVariants;
  quantity?: number | string;
  totalPriceOfProduct?: number | string;
  addToCartHandler?: (name: string, price: number) => void;
  addToFavoritesHandler?: (name: string) => void;
  removeFromFavoritesHandler?: (name: string) => void;
  increaseHandler?: (name: string, price: number) => void;
  decreaseHandler?: (name: string, price: number) => void;
  deleteFromCartHandler?: (name: string) => void;
};
