export type RootState = {
  search: {
    searching: boolean;
    value: string;
  };
  cart: {
    items: Array<ProductFromCart>;
    totalPrice: number;
  };
};

export type ProductFromCart = {
  name: string;
  count: number;
  price: number;
};
