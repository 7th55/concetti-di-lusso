import { Box, Title, Text, Space } from '@mantine/core';
import { CardVariants } from '../../ProductCard';

export const Content = ({
  title,
  description,
  count,
  totalPriceOfProduct,
  variant,
}: {
  title: string;
  description?: string;
  count?: number | string;
  totalPriceOfProduct?: number | string;
  variant: CardVariants;
}) => {
  return (
    <>
      <Title
        order={4}
        size="1rem"
        sx={{ fontFamily: 'Open Sans, sans-serif', lineHeight: 1.9 }}
      >
        {title}
      </Title>
      {variant === 'cartCard' && (
        <Box h="100%">
          <Text>
            Count: {count}
            <Space />
            Total Price: {totalPriceOfProduct}
          </Text>
        </Box>
      )}
      {variant !== 'cartCard' && description && (
        <Box h="100%">
          <Text>{description}</Text>
        </Box>
      )}
    </>
  );
};
