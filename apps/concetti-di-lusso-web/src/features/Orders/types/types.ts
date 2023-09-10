import { ProductFromCart } from '/src/shared/types';

export type OrdersData = {
  id: number;
  email: string;
  orders: Array<{
    date: {
      time: string;
      date: string;
    };
    products: Array<ProductFromCart>;
    totalPrice: number;
  }>;
};
