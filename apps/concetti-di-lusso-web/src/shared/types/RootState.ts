export type RootState = {
  search: {
    searching: boolean;
    value: string;
  };
  cart: {
    items: Array<string>;
  };
};
