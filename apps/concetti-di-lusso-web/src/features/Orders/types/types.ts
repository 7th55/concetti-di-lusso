import { ProductFromCart } from '/src/shared/types';
import { Cart, UserData } from '/src/shared/types/RootState';

export type OrdersProps = {
  userInfo: Pick<UserData, 'id' | 'email'>;
  cart: Cart;
};

export type OrdersData = {
  id: number;
  email: string;
  orders: Array<{
    orderInfo: {
      time: string;
      date: string;
    };
    products: Array<ProductFromCart>;
    totalPrice: number;
  }>;
};

export type OrdersListProps = {
  orders: OrdersData['orders'];
  userInfo: Pick<OrdersData, 'id' | 'email'>;
  deleteHandler: (order: OrdersData) => void;
};
