export type RootState = {
  search: {
    searching: boolean;
    value: string;
  };
  cart: {
    items: Array<ProductFromCart>;
  };
};

export type ProductFromCart = {
  name: string;
  count: number;
};
