import { OrdersData } from '/src/features/Orders/types';
import { Cart } from '/src/shared/types/RootState';

export const createOrder = (
  id: OrdersData['id'],
  orders: OrdersData['orders'],
  createOrder: Cart,
  buyerInfo: any
) => ({
  id,
  orders: [
    {
      orderInfo: {
        firstName: buyerInfo.firstName,
        lastName: buyerInfo.lastName,
        phone: buyerInfo.phone,
        email: buyerInfo.email,
        address: buyerInfo.address,
        time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
        date: `${new Date().getDate()}.${
          new Date().getMonth() + 1
        }.${new Date().getFullYear()}`,
      },
      products: createOrder.items,
      totalPrice: createOrder.totalPrice,
    },
    ...orders,
  ],
});

export const orderDate = (date: string) => {
  const orderDate = date.split('.');
  const day = orderDate[0];
  const month = orderDate[1];
  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const monthString = months[Number(month) - 1];
  const age = orderDate[2];

  return `${day} ${monthString} ${age}`;
};

export const orderTime = (time: string, divider: string) => {
  const orderTime = time.split(divider);
  const hours = Number(orderTime[0]);
  const minutes = Number(orderTime[1]);

  const amPm = hours < 12 ? 'AM' : 'PM';
  const isMidnight = hours !== 0 ? hours : 12;
  const orderHours = isMidnight > 12 ? isMidnight - 12 : isMidnight;

  return `${orderHours}:${minutes} ${amPm}`;
};
