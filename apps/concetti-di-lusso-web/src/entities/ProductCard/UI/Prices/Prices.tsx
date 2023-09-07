// Components
import { Box, Flex, MediaQuery } from '@mantine/core';
// Types
import { CardVariants } from '/src/entities/ProductCard/types';

export const Prices = ({
  price,
  oldPrice,
}: {
  price: React.ReactNode;
  oldPrice?: React.ReactNode;
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
