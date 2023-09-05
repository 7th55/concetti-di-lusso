import { Box, Flex, MediaQuery } from '@mantine/core';
import { CardVariants } from '../../ProductCard';

export const Prices = ({
  price,
  oldPrice,
  variant,
}: {
  price: React.ReactNode;
  oldPrice?: React.ReactNode;
  variant: CardVariants;
}) => {
  return (
    <MediaQuery
      smallerThan={1430}
      styles={{ justifyContent: 'flex-start', width: '50%', left: 0 }}
    >
      <Flex
        w="50%"
        justify="space-between"
        align="center"
        sx={{ position: 'relative', left: -3 }}
      >
        {price}

        {oldPrice && (
          <MediaQuery smallerThan={1430} styles={{ top: -3, left: 2 }}>
            <Box sx={{ position: 'relative', top: 4, left: -10 }}>
              {oldPrice}
            </Box>
          </MediaQuery>
        )}
      </Flex>
    </MediaQuery>
  );
};
