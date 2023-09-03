export type RootState = {
  auth: {
    user: {
      email: string | null;
      id: number | null;
      accessToken: string | null;
    };
  };
  search: {
    searching: boolean;
    value: string;
  };
  cart: {
    items: Array<ProductFromCart>;
    totalPrice: number;
  };
  favorites: FavoritesProducts;
};

export type ProductFromCart = {
  name: string;
  count: number;
  price: number;
};

export type FavoritesProducts = {
  items: Array<{ name: string }>;
};
