export type RootState = {
  auth: {
    user: UserData;
  };
  search: {
    searching: boolean;
    value: string;
  };
  cart: Cart;
  favorites: FavoritesProducts;
};

export type UserData = {
  email: string | null;
  id: number | null;
  accessToken: string | null;
};

export type Cart = {
  items: Array<ProductFromCart>;
  totalPrice: number;
};

export type ProductFromCart = {
  name: string;
  count: number;
  price: number;
};

export type FavoritesProducts = {
  items: Array<{ name: string }>;
};
