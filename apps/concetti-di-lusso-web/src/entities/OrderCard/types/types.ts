// TODO: Fix dependencies
import { OrderInfo, OrdersData } from '/src/features/Orders/types/types';

export type Orders = OrdersData['orders'];

type ArrElement<ArrType> = ArrType extends readonly (infer ElementType)[]
  ? ElementType
  : never;

export type Order = ArrElement<Orders>;

export type OrderCardProps = {
  firstName: OrderInfo['firstName'];
  lastName: OrderInfo['lastName'];
  phone: OrderInfo['phone'];
  email: OrderInfo['email'];
  address: OrderInfo['address'];
  date: OrderInfo['date'];
  time: OrderInfo['time'];
  totalPrice: Order['totalPrice'];
  items: number;
} & {
  deleteHandler: () => void;
};
