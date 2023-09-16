import { RecipientFormType } from '/src/entities/OrderForm';
import { ProductFromCart } from '/src/shared/types';
import { Cart, UserData } from '/src/shared/types/RootState';

export type OrdersProps = {
  variant: 'create' | 'list';
  userInfo: Pick<UserData, 'id' | 'email'>;
  cart: Cart;
};

export type OrdersData = {
  id: number;
  email: string;
  orders: Array<{
    orderInfo: OrderInfo;
    products: Array<ProductFromCart>;
    totalPrice: number;
  }>;
};

export type OrdersListProps = {
  orders: OrdersData['orders'];
  userInfo: Pick<OrdersData, 'id' | 'email'>;
  deleteHandler: (order: OrdersData) => void;
};

export type OrderInfo = RecipientFormType & {
  time: string;
  date: string;
};
