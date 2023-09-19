// Components
import { Text } from '@mantine/core';
// Styles
import classes from './styles.module.scss';

export const Price = ({
  value,
  variant,
  size = '1rem',
}: {
  value: string | number;
  variant: string;
  size?: number | string;
}) => {
  let priceClass;
  switch (variant) {
    case 'price':
      priceClass = classes.price;
      break;
    case 'oldPrice':
      priceClass = classes.oldPrice;
      break;
  }

  return (
    <Text className={priceClass} style={{ fontSize: size }}>
      {value}
    </Text>
  );
};
