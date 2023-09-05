import { Text, createStyles } from '@mantine/core';

type PriceProps = {
  size: number | string;
};

const useStyles = createStyles((theme, { size }: PriceProps) => ({
  price: {
    fontSize: size,
    fontWeight: 500,
    LetterSpacing: 0.2,
    color: theme.colors.maroon[9],
  },
  oldPrice: {
    position: 'relative',
    fontSize: size,
    fontWeight: 400,
    color: theme.colors.raisinBlack[6],
    '&::after': {
      content: '""',
      width: '100%',
      height: 1,
      position: 'absolute',
      top: 12,
      left: 1,
      backgroundColor: theme.colors.raisinBlack[6],
    },
  },
}));

export const Price = ({
  value,
  variant,
  size = '1rem',
}: {
  value: string | number;
  variant: string;
  size?: number | string;
}) => {
  const { classes } = useStyles({ size });
  let priceClass;
  switch (variant) {
    case 'price':
      priceClass = classes.price;
      break;
    case 'oldPrice':
      priceClass = classes.oldPrice;
      break;
  }

  return <Text className={priceClass}>{value}</Text>;
};
