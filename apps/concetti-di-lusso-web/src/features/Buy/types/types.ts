import { ProductFromCart } from '/src/shared/types';

export type OrdersData = {
  id: number;
  orders: Array<{
    date: {
      time: string;
      date: string;
    };
    items: Array<ProductFromCart>;
    totalPrice: number;
  }>;
};
